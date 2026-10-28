const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const css = fs.readFileSync('style.css', 'utf-8');
const js = fs.readFileSync('script.js', 'utf-8');

const workerCode = `/**
 * Cloudflare Worker for Ruou Men La Bang Phuc - Bac Kan
 * Live URL: https://mycv.dtc235200744.workers.dev/
 * GitHub: https://github.com/dtc235200744-cloud/mycv
 */

const HTML_CONTENT = ${JSON.stringify(html)};
const CSS_CONTENT = ${JSON.stringify(css)};
const JS_CONTENT = ${JSON.stringify(js)};

const GITHUB_PAGES_BASE = "https://dtc235200744-cloud.github.io/mycv";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    };

    if (path === '/style.css') {
      return new Response(CSS_CONTENT, {
        headers: { ...headers, 'Content-Type': 'text/css; charset=utf-8' },
      });
    }

    if (path === '/script.js') {
      return new Response(JS_CONTENT, {
        headers: { ...headers, 'Content-Type': 'application/javascript; charset=utf-8' },
      });
    }

    // Proxy static assets from GitHub Pages if requested on Worker
    if (path.startsWith('/assets/')) {
      const assetUrl = GITHUB_PAGES_BASE + path;
      try {
        const response = await fetch(assetUrl);
        if (response.ok) {
          const contentType = response.headers.get('content-type') || 'image/jpeg';
          return new Response(response.body, {
            headers: { ...headers, 'Content-Type': contentType },
          });
        }
      } catch (err) {
        // Fallback redirect
        return Response.redirect(assetUrl, 302);
      }
    }

    // Default: Return index.html
    return new Response(HTML_CONTENT, {
      headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};
`;

fs.writeFileSync('worker.js', workerCode);
console.log('Optimized worker.js generated! Size:', (workerCode.length / 1024).toFixed(2), 'KB');
