# 🍶 Bằng Phúc Tửu - Website Giới Thiệu & Đặt Mua Rượu Men Lá Bằng Phúc (Bắc Kạn)

> Nền tảng web thương mại điện tử & Trợ lý AI giới thiệu đặc sản **Rượu Men Lá Bằng Phúc** (Xã Bằng Phúc, Huyện Chợ Đồn, Tỉnh Bắc Kạn).
> Được xây dựng với giao diện **Luxury Heritage**, hỗ trợ Dark/Light Mode, Giỏ hàng thông minh, Đặt hàng trực tiếp qua Zalo/Hotline và Trợ lý AI Sommelier.

![Rượu Men Lá Bằng Phúc](assets/hero_banner.jpg)

---

## 🌟 Điểm Nổi Bật Của Website (Key Features)

- 🎨 **Thiết Kế Phong Cách Mỹ Tửu Vùng Cao (Luxury Mountain Heritage)**:
  - Tông màu vàng kim hổ phách (#d4af37), nâu gỗ sồi và xanh đại ngàn sang trọng.
  - Hiệu ứng kính mờ (Glassmorphism), chuyển động mượt mà, tối ưu hiển thị mọi thiết bị (Responsive 100%).
- 🌓 **Chế Độ Giao Diện Kép (Dark / Light Mode)**:
  - Chuyển đổi linh hoạt giữa nền tối trầm ấm và nền sáng nhã nhặn, tự động lưu vào `localStorage`.
- 🤖 **Trợ Lý AI Sommelier (RAG AI Advisor)**:
  - Tích hợp khung chat tương tác với dữ liệu chuyên sâu về 36 vị men lá rừng Bằng Phúc.
  - Tư vấn chọn loại rượu phù hợp với tiệc cưới, quà biếu sếp/Tết, cách ngâm rượu thảo mộc và gợi ý món mồi nhắm đặc sản Bắc Kạn.
- 🛒 **Giỏ Hàng & Đặt Hàng Thông Minh**:
  - Quản lý giỏ hàng `localStorage` (thêm, bớt, xóa, tính tổng tiền, tự động tính Freeship từ 500k).
  - Modal xem nhanh chi tiết sản phẩm (Quick View) nồng độ, dung tích, thời gian hạ thổ.
  - Đặt hàng nhanh tích hợp gửi đơn hàng trực tiếp qua **Zalo Hotline (0987.654.321)** chỉ với 1 chạm.
- 📦 **Tối Ưu Triển Khai Kép**:
  - Chạy trực tiếp trên **GitHub Pages**: `https://dtc235200744-cloud.github.io/mycv/`
  - Chạy trên **Cloudflare Edge Worker**: `https://mycv.dtc235200744.workers.dev/`

---

## 📂 Cấu Trúc Dự Án

```text
CV/
├── index.html        # Giao diện chính (Semantic HTML5, chuẩn SEO)
├── style.css         # Hệ thống giao diện Luxury, Dark/Light Mode & Responsive
├── script.js         # Logic Giỏ hàng, Quick View, Trợ lý AI, Đặt hàng Zalo
├── build_worker.js   # Script đóng gói tối ưu cho Cloudflare Worker
├── worker.js         # Cloudflare Worker code
├── wrangler.toml     # Cấu hình Cloudflare Worker
├── assets/           # Hình ảnh độ phân giải cao
│   ├── hero_banner.jpg
│   ├── ruou_binh_gom.jpg
│   ├── ruou_chai_thuytinh.jpg
│   └── ruou_hop_qua.jpg
├── package.json      # Scripts & dependencies
└── README.md         # Hướng dẫn chi tiết
```

---

## 🛠️ Hướng Dẫn Chạy & Cài Đặt Lên Link `dtc235200744-cloud/mycv`

### 1. Xem Thử Nghiệm Trên Máy Tính (Local Server)
```bash
# Cài đặt (nếu chưa có) và khởi động server local
npm run dev
```
Truy cập: `http://localhost:3000`

---

### 2. Cài Đặt Lên GitHub Pages (Link `dtc235200744-cloud/mycv`)

1. Lưu tất cả thay đổi và đẩy lên GitHub:
   ```bash
   git add .
   git commit -m "feat: ra mat website ban Ruou Men La Bang Phuc - Bac Kan"
   git push origin main
   ```
2. Truy cập vào kho lưu trữ GitHub:
   👉 **`https://github.com/dtc235200744-cloud/mycv`**
3. Vào **Settings** > **Pages** > tại mục **Branch**, chọn nhánh `main` và thư mục `/(root)` rồi bấm **Save**.
4. Website bán Rượu Bằng Phúc sẽ chính thức hoạt động tại link:
   👉 **`https://dtc235200744-cloud.github.io/mycv/`**

---

### 3. Triển Khai Lên Cloudflare Workers (Tùy Chọn)
```bash
# Đóng gói và deploy lên Cloudflare Edge Worker
npm run deploy
```
Trang web sẽ live trên link:
👉 **`https://mycv.dtc235200744.workers.dev/`**

---

## 👨‍💻 Đơn Vị Phát Triển & Liên Hệ

- **Cơ sở sản xuất:** Hợp Tác Xã Rượu Men Lá Bằng Phúc - Xã Bằng Phúc, Huyện Chợ Đồn, Tỉnh Bắc Kạn.
- **Kỹ sư phát triển:** Ma Đình Tiến (Khoa CNTT - ICTU)
- **Hotline / Zalo đặt rượu:** [0987.654.321](tel:0987654321)
- **Email:** [dtc235200744@ictu.edu.vn](mailto:dtc235200744@ictu.edu.vn)