/**
 * Modern CV / Portfolio Interactive Scripts
 * Author: Đặng Thành Công (dtc235200744-cloud)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const htmlRoot = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');
  const printBtn = document.getElementById('printBtn');
  const emailContact = document.getElementById('emailContact');
  const toastNotification = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMsg');

  /* ==========================================================================
     1. THEME MANAGEMENT (Dark / Light Mode)
     ========================================================================== */
  const savedTheme = localStorage.getItem('cv_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(systemPrefersDark ? 'dark' : 'dark'); // Default to sleek dark mode
  }

  function setTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('cv_theme', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  /* ==========================================================================
     2. BILINGUAL LANGUAGE SYSTEM (Tiếng Việt / English)
     ========================================================================== */
  const savedLang = localStorage.getItem('cv_lang') || 'vi';
  setLanguage(savedLang);

  function setLanguage(lang) {
    htmlRoot.setAttribute('data-lang', lang);
    htmlRoot.setAttribute('lang', lang);
    localStorage.setItem('cv_lang', lang);

    // Update button text: when current is VI, show EN as next switch target
    if (langLabel) {
      langLabel.textContent = lang === 'vi' ? 'EN' : 'VI';
    }

    // Update document title and meta description
    if (lang === 'en') {
      document.title = 'Resume - Dang Thanh Cong | Cloud & Full-Stack Developer';
    } else {
      document.title = 'CV - Đặng Thành Công | Cloud & Full-Stack Developer';
    }

    // Swap content for all elements with .lang-text class
    const translatableElements = document.querySelectorAll('.lang-text');
    translatableElements.forEach(el => {
      const targetText = el.getAttribute(`data-${lang}`);
      if (targetText) {
        el.innerHTML = targetText;
      }
    });
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentLang = htmlRoot.getAttribute('data-lang') || 'vi';
      const nextLang = currentLang === 'vi' ? 'en' : 'vi';
      setLanguage(nextLang);
      
      const currentLangCode = htmlRoot.getAttribute('data-lang');
      showToast(currentLangCode === 'vi' ? 'Đã chuyển sang Tiếng Việt' : 'Switched to English');
    });
  }

  /* ==========================================================================
     3. PRINT / PDF EXPORT
     ========================================================================== */
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* ==========================================================================
     4. COPY EMAIL & TOAST NOTIFICATION
     ========================================================================== */
  function showToast(message) {
    if (!toastNotification || !toastMsg) return;
    toastMsg.textContent = message;
    toastNotification.classList.add('show');
    
    clearTimeout(toastNotification._timer);
    toastNotification._timer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 2800);
  }

  if (emailContact) {
    emailContact.addEventListener('click', (e) => {
      // If user holds Ctrl or Cmd, let default mailto open; otherwise copy to clipboard
      if (!e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        const email = 'dtc235200744@ictu.edu.vn';
        navigator.clipboard.writeText(email)
          .then(() => {
            const currentLang = htmlRoot.getAttribute('data-lang');
            showToast(currentLang === 'vi' 
              ? 'Đã sao chép email: ' + email 
              : 'Copied email: ' + email);
          })
          .catch(() => {
            // Fallback: open mail client
            window.location.href = `mailto:${email}`;
          });
      }
    });
  }

  console.log('%c💼 CV - Đặng Thành Công (dtc235200744-cloud)', 'font-size: 14px; font-weight: bold; color: #6366f1;');
  console.log('GitHub: https://github.com/dtc235200744-cloud/mycv');
});
