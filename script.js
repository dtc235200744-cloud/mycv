/**
 * RƯỢU MEN LÁ BẰNG PHÚC - E-COMMERCE & INTERACTIVE SCRIPTS
 * HTX Rượu Men Lá Bằng Phúc - Chợ Đồn, Bắc Kạn
 * Vận hành & Kỹ thuật: Ma Đình Tiến
 */

// ==========================================================================
// 1. PRODUCT CATALOG DATA
// ==========================================================================
const PRODUCTS = [
  {
    id: "bp-01",
    name: "Rượu Men Lá Bằng Phúc 40° (Chai Thủy Tinh 750ml)",
    category: "bottle",
    price: 135000,
    originalPrice: 160000,
    image: "assets/ruou_chai_thuytinh.jpg",
    tag: "Bán Chạy Nhất",
    abv: "40% Vol",
    volume: "750ml",
    desc: "Chưng cất thủ công từ gạo nếp nương tuyển chọn và men 36 vị lá rừng tự nhiên. Rượu trong suốt, vị ngọt hậu thanh tao, đượm hương thảo mộc đại ngàn.",
    rating: 5,
    details: {
      ingredients: "Gạo nếp nương Chợ Đồn, 36 vị men lá rừng Bằng Phúc, nước giếng đá mạch ngầm",
      aging: "Ủ chum sành 12 tháng khử Andehit",
      scent: "Hương thảo mộc mát lành, mùi thơm nồng nàn của gạo nếp chín",
      taste: "Khởi đầu êm dịu, ấm nồng lan tỏa, hậu vị ngọt thanh sâu lắng"
    }
  },
  {
    id: "bp-02",
    name: "Rượu Nếp Nương Hạ Thổ Chum Sành 3 Năm (Bình Gốm 750ml)",
    category: "ceramic",
    price: 295000,
    originalPrice: 350000,
    image: "assets/ruou_binh_gom.jpg",
    tag: "Thượng Phẩm 3 Năm",
    abv: "40% Vol",
    volume: "750ml",
    desc: "Tuyệt phẩm rượu nếp hạ thổ ròng rã 36 tháng dưới lòng đất trong chum gốm sành không tráng men. Rượu sánh vàng ngọc, êm ru như nhung, uống say không đau đầu.",
    rating: 5,
    details: {
      ingredients: "100% Gạo nếp nương vùng cao, bánh men lá cổ truyền",
      aging: "Hạ thổ đất rừng nguyên sinh 36 tháng (3 năm)",
      scent: "Hương đất gốm mộc mạc, thoang thoảng quế chi và sa nhân rừng",
      taste: "Tròn vị, mềm môi, không một chút gắt họng"
    }
  },
  {
    id: "bp-03",
    name: "Hộp Quà Biếu VIP 'Đại Ngàn Thượng Đỉnh'",
    category: "gift",
    price: 850000,
    originalPrice: 990000,
    image: "assets/ruou_hop_qua.jpg",
    tag: "Quà Biếu Cao Cấp",
    abv: "42% Vol",
    volume: "750ml x 2 Bình",
    desc: "Bộ hộp gỗ tre thủ công chạm khắc tinh xảo gồm 02 bình gốm Rượu Men Lá Hạ Thổ và 02 chén gốm sơn mài. Món quà ngoại giao sang trọng, đậm đà bản sắc núi rừng.",
    rating: 5,
    details: {
      ingredients: "Rượu Men Lá Bằng Phúc thượng hạng hạ thổ 3 năm",
      accessories: "Hộp gỗ tre bọc nhung lụa, xi phong vàng, 02 chén gốm",
      suitableFor: "Quà biếu lãnh đạo, đối tác, tri ân khách hàng dịp Lễ Tết"
    }
  },
  {
    id: "bp-04",
    name: "Rượu Ngô Men Lá Chợ Đồn Nguyên Chất (Chai Thủy Tinh 750ml)",
    category: "bottle",
    price: 145000,
    originalPrice: 170000,
    image: "assets/ruou_chai_thuytinh.jpg",
    tag: "Đặc Sản Ngô Bản",
    abv: "42% Vol",
    volume: "750ml",
    desc: "Nấu từ hạt ngô vàng rẫy đá vùng cao Bắc Kạn, lên men bằng men lá rừng. Vị cay nồng ấm bụng, hương thơm ngô nướng quyện mùi sa nhân độc nhất vô nhị.",
    rating: 5,
    details: {
      ingredients: "Ngô đồi nương đá Bằng Phúc, men thảo mộc tự nhiên",
      aging: "Ủ chum 18 tháng",
      taste: "Cay nồng ban đầu, ngọt hậu dài lâu, làm ấm người cực nhanh"
    }
  },
  {
    id: "bp-05",
    name: "Bình Rượu Gốm Men Lá Bằng Phúc Ngâm Sâm Cau Rừng (1.2L)",
    category: "ceramic",
    price: 590000,
    originalPrice: 720000,
    image: "assets/ruou_binh_gom.jpg",
    tag: "Bổ Thận Tráng Dương",
    abv: "38% Vol",
    volume: "1.2 Lít",
    desc: "Rượu men lá cốt ngâm củ sâm cau đỏ và dâm dương hoắc núi rừng Chợ Đồn. Giúp bồi bổ gân cốt, tăng cường sinh lực, khí huyết lưu thông.",
    rating: 5,
    details: {
      ingredients: "Rượu men lá Bằng Phúc, củ sâm cau đỏ rừng, đẳng sâm, kỷ tử",
      aging: "Ngâm ủ trên 12 tháng",
      benefit: "Bổ thận, tráng dương, giảm đau lưng mỏi gối"
    }
  },
  {
    id: "bp-06",
    name: "Can Rượu Men Lá Bằng Phúc 5 Lít (Đãi Tiệc / Cỗ Cưới)",
    category: "bulk",
    price: 520000,
    originalPrice: 650000,
    image: "assets/hero_banner.jpg",
    tag: "Tiết Kiệm 20%",
    abv: "40% Vol",
    volume: "Can 5 Lít",
    desc: "Đóng can nhựa nguyên sinh đạt chuẩn an toàn thực phẩm. Chuyên cung cấp cho các bữa tiệc cưới, liên hoan công ty, nhà hàng quán ăn đặc sản Tây Bắc.",
    rating: 5,
    details: {
      ingredients: "Gạo nếp nương, 36 vị men lá rừng Bằng Phúc",
      suitableFor: "Phục vụ 25 - 40 người trong tiệc liên hoan"
    }
  },
  {
    id: "bp-07",
    name: "Can Rượu Ngô Men Lá Bắc Kạn 10 Lít (Giá Sỉ)",
    category: "bulk",
    price: 950000,
    originalPrice: 1200000,
    image: "assets/hero_banner.jpg",
    tag: "Giá Sỉ Tại Xưởng",
    abv: "42% Vol",
    volume: "Can 10 Lít",
    desc: "Nguyên chất từ lò chưng cất thủ công xã Bằng Phúc. Đảm bảo nguyên cốt, không pha loãng, bảo hành chất lượng từng giọt rượu.",
    rating: 5,
    details: {
      ingredients: "Ngô rẫy nương đá Bắc Kạn, men lá rừng",
      shipping: "Giao thùng xốp bảo hộ toàn quốc"
    }
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================
let cart = JSON.parse(localStorage.getItem("bangphuc_cart")) || [];

function saveCart() {
  localStorage.setItem("bangphuc_cart", JSON.stringify(cart));
  updateCartUI();
}

function formatVND(amount) {
  return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
}

// Toast notification helper
function showToast(message, icon = "✓") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="color:var(--gold-primary);font-weight:bold;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 3. RENDER PRODUCTS & FILTERS
// ==========================================================================
function renderProducts(items) {
  const container = document.getElementById("productsContainer");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">Không tìm thấy sản phẩm phù hợp!</p>
        <p style="font-size: 0.9rem;">Vui lòng thử tìm từ khóa khác hoặc nhấn vào "Tất Cả" để xem toàn bộ danh mục.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="card-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="card-img" loading="lazy">
        <span class="card-tag">${product.tag}</span>
        <button class="btn btn-glass btn-sm card-quick-view" onclick="openQuickView('${product.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          Xem Nhanh
        </button>
      </div>
      
      <div class="card-body">
        <div class="card-meta">
          <span>${product.abv}</span> • <span>${product.volume}</span> • <span>★★★★★</span>
        </div>
        <h3 class="card-title">${product.name}</h3>
        <p class="card-desc">${product.desc}</p>
        
        <div class="card-price-row">
          <span class="current-price">${formatVND(product.price)}</span>
          <span class="original-price">${formatVND(product.originalPrice)}</span>
        </div>

        <div class="card-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.id}')">
            Thêm Giỏ
          </button>
          <button class="btn-buy-now" onclick="buyNow('${product.id}')">
            Mua Ngay
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Category Tabs & Search handler
function setupFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("productSearch");

  let currentCategory = "all";
  let currentSearch = "";

  function filterAndDisplay() {
    let filtered = PRODUCTS;
    if (currentCategory !== "all") {
      filtered = filtered.filter(p => p.category === currentCategory);
    }
    if (currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
      );
    }
    renderProducts(filtered);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.category;
      filterAndDisplay();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      filterAndDisplay();
    });
  }
}

// ==========================================================================
// 4. SHOPPING CART FUNCTIONALITY
// ==========================================================================
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      volume: product.volume,
      abv: product.abv,
      quantity: qty
    });
  }

  saveCart();
  showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

function buyNow(productId) {
  addToCart(productId, 1);
  openCart();
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng.");
}

function updateCartUI() {
  const countBadge = document.getElementById("cartCountBadge");
  const drawerCount = document.getElementById("drawerItemCount");
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const shipText = document.getElementById("cartShippingText");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = `(${totalItems} sản phẩm)`;

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">🍶</div>
        <p style="font-weight:600;font-size:1.1rem;margin-bottom:0.5rem;">Giỏ hàng của bạn đang trống</p>
        <p style="font-size:0.88rem;">Hãy chọn cho mình những chai rượu men lá Bằng Phúc thơm ngon nhất nhé!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "0đ";
    if (totalEl) totalEl.textContent = "0đ";
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-price">${formatVND(item.price)}</div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-del" onclick="removeFromCart('${item.id}')" title="Xóa">✕</button>
    </div>
  `).join("");

  const shipping = subtotal >= 500000 || subtotal === 0 ? 0 : 35000;
  const grandTotal = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = formatVND(subtotal);
  if (totalEl) totalEl.textContent = formatVND(grandTotal);
  if (shipText) {
    shipText.textContent = subtotal >= 500000 
      ? "Miễn phí toàn quốc (Đơn từ 500k)" 
      : "35.000đ (Mua thêm để được Freeship)";
  }
}

// Drawer Toggle Handlers
function openCart() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  if (drawer) drawer.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================================================
// 5. QUICK VIEW MODAL
// ==========================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const content = document.getElementById("quickViewContent");
  const modal = document.getElementById("quickViewModal");

  content.innerHTML = `
    <div class="quick-view-grid">
      <div class="qv-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="qv-info">
        <span class="card-tag" style="position:static;display:inline-block;margin-bottom:0.75rem;">${product.tag}</span>
        <h2 class="qv-title">${product.name}</h2>
        <div class="card-price-row" style="margin:0.5rem 0 1rem;">
          <span class="current-price" style="font-size:1.6rem;">${formatVND(product.price)}</span>
          <span class="original-price">${formatVND(product.originalPrice)}</span>
        </div>
        <p style="color:var(--text-muted);font-size:0.95rem;line-height:1.6;margin-bottom:1rem;">${product.desc}</p>
        
        <ul class="qv-spec-list">
          <li><strong>Nồng độ cồn:</strong> <span>${product.abv}</span></li>
          <li><strong>Dung tích chuẩn:</strong> <span>${product.volume}</span></li>
          <li><strong>Nguyên liệu:</strong> <span>${product.details.ingredients || "Thảo mộc tự nhiên"}</span></li>
          <li><strong>Quy cách ủ:</strong> <span>${product.details.aging || "Hạ thổ chum sành"}</span></li>
        </ul>

        <div style="display:flex;gap:1rem;margin-top:auto;">
          <button class="btn btn-gold btn-block" onclick="addToCart('${product.id}', 1); closeQuickView();">
            Thêm Vào Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================================================
// 6. CHECKOUT & ORDER MODAL
// ==========================================================================
function openCheckout() {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống! Vui lòng chọn sản phẩm trước.", "⚠️");
    return;
  }
  closeCart();

  const modal = document.getElementById("checkoutModal");
  const itemsText = document.getElementById("modalSummaryItems");
  const totalText = document.getElementById("modalSummaryTotal");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 500000 ? 0 : 35000;
  const grandTotal = subtotal + shipping;

  itemsText.textContent = `${totalItems} sản phẩm`;
  totalText.textContent = formatVND(grandTotal);

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const address = document.getElementById("orderAddress").value.trim();
  const payment = document.getElementById("orderPayment").value;
  const note = document.getElementById("orderNote").value.trim();

  if (!name || !phone || !address) {
    alert("Vui lòng nhập đầy đủ họ tên, số điện thoại và địa chỉ nhận hàng.");
    return;
  }

  // Create order details text for Zalo / SMS
  const itemsList = cart.map(i => `• ${i.name} (SL: ${i.quantity}) - ${formatVND(i.price * i.quantity)}`).join("\n");
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 500000 ? 0 : 35000;
  const grandTotal = subtotal + shipping;

  const orderMessage = `ĐƠN ĐẶT RƯỢU MEN LÁ BẰNG PHÚC:\nKhách hàng: ${name}\nSĐT: ${phone}\nĐịa chỉ: ${address}\nPhương thức: ${payment === "cod" ? "COD (Nhận hàng kiểm tra thanh toán)" : "Chuyển khoản"}\nGhi chú: ${note || "Không"}\n\nChi tiết đơn hàng:\n${itemsList}\nPhí ship: ${shipping === 0 ? "Freeship" : formatVND(shipping)}\nTỔNG CỘNG: ${formatVND(grandTotal)}`;

  // Store in LocalStorage
  const orders = JSON.parse(localStorage.getItem("bangphuc_orders")) || [];
  orders.push({
    date: new Date().toISOString(),
    customer: { name, phone, address, payment, note },
    items: cart,
    total: grandTotal
  });
  localStorage.setItem("bangphuc_orders", JSON.stringify(orders));

  // Clear cart
  cart = [];
  saveCart();
  closeCheckout();

  showToast("Đặt hàng thành công! HTX Rượu Bằng Phúc sẽ liên hệ sớm nhất.", "🎉");

  // Prompt user to send directly via Zalo
  if (confirm("Đặt hàng thành công! Bạn có muốn mở Zalo gửi chi tiết đơn hàng đến Hotline 0987.654.321 ngay để được gửi hàng nhanh hơn không?")) {
    const zaloUrl = `https://zalo.me/0987654321?text=${encodeURIComponent(orderMessage)}`;
    window.open(zaloUrl, "_blank");
  }
}

// Direct Zalo Order button
function handleDirectZaloOrder() {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }
  const itemsList = cart.map(i => `• ${i.name} (SL: ${i.quantity})`).join("\n");
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const msg = `Xin chào Bằng Phúc Tửu, tôi muốn đặt mua các loại rượu sau:\n${itemsList}\nTạm tính: ${formatVND(subtotal)}\nNhờ shop tư vấn giao hàng giúp tôi nhé!`;
  window.open(`https://zalo.me/0987654321?text=${encodeURIComponent(msg)}`, "_blank");
}

// ==========================================================================
// 7. INTERACTIVE AI SOMMELIER (RAG CHATBOT ENGINE)
// ==========================================================================
const AI_KNOWLEDGE_BASE = [
  {
    keywords: ["đau đầu", "nhức đầu", "say", "metanol", "andehet", "andehit"],
    reply: "Rượu Men Lá Bằng Phúc cam kết **uống say êm dịu, không hề bị đau đầu hay khát nước**! Lý do là bởi rượu được nấu hoàn toàn từ 36 vị thảo mộc rừng và được **hạ thổ trong chum gốm sành không tráng men từ 12 - 36 tháng**. Quá trình hạ thổ tự nhiên giúp thẩm thấu và phân hủy hoàn toàn độc tố Andehit và Metanol, giúp bạn thức dậy sảng khoái và tỉnh táo."
  },
  {
    keywords: ["quà biếu", "biếu sếp", "quà tết", "đối tác", "sang trọng", "hộp"],
    reply: "Để làm quà biếu sếp hoặc đối tác ngoại giao, sản phẩm phù hợp nhất là **Hộp Quà Biếu VIP 'Đại Ngàn Thượng Đỉnh' (850.000đ)** gồm 02 bình gốm hạ thổ kèm 02 ly gốm truyền thống, hoặc **Bình Rượu Nếp Nương Hạ Thổ Chum Sành 3 Năm (295.000đ)**. Bình gốm mang đậm nét mộc mạc, sang trọng, thể hiện đẳng cấp và tấm lòng trân quý của người tặng."
  },
  {
    keywords: ["mồi", "mồi nhắm", "món ăn", "nhắm gì", "ăn kèm"],
    reply: "Rượu Men Lá Bằng Phúc kết hợp tuyệt vời nhất với các món đặc sản vùng cao như: **Thịt lợn đen gác bếp, lạp xưởng hun khói Chợ Đồn, cá suối nướng Ba Bể, gà đồi hấp lá chanh, thịt trâu xào lá lốt** hoặc các món lẩu cá hồi, lẩu thắng cố. Hương thảo dược của rượu sẽ làm dậy vị béo ngậy của thịt nướng và khử tanh hoàn hảo."
  },
  {
    keywords: ["hạ thổ", "3 năm", "chum sành", "khác gì"],
    reply: "Rượu hạ thổ 3 năm khác rượu mới nấu ở 3 điểm vượt trội:\n1. **Độ êm mượt:** Rượu rót ra sủi tăm tăm như ngọc, uống mềm môi không một chút gắt họng.\n2. **Hương vị:** Tinh chất 36 vị lá rừng ngấu kỹ, tạo nên hậu vị ngọt sâu lắng dài lâu.\n3. **Khử độc tố:** Hàm lượng Andehit giảm về gần như bằng 0, cực kỳ an toàn cho gan và sức khỏe."
  },
  {
    keywords: ["ship", "vận chuyển", "bao lâu", "hà nội", "sài gòn", "kiểm tra"],
    reply: "Chúng tôi **giao hàng tận nơi trên toàn quốc** đóng trong thùng xốp chuyên dụng:\n• Hà Nội & Thái Nguyên: Nhận hàng trong 24 giờ.\n• Miền Trung & Miền Nam: Nhận hàng trong 2 - 3 ngày.\nQuý khách được **mở thùng kiểm tra và nếm thử trực tiếp**, chuẩn hương vị Rượu Men Lá Bằng Phúc thì mới thanh toán cho bưu tá!"
  },
  {
    keywords: ["ngâm", "sâm", "thuốc", "rượu cốt", "nồng độ", "40", "42"],
    reply: "Để ngâm các loại sâm rừng, đinh lăng, ba kích, nấm ngọc cẩu hay đông trùng hạ thảo, quý khách nên chọn dòng **Rượu Men Lá Bằng Phúc 42° - 45° nguyên chất (Can 5L hoặc 10L)**. Rượu nguyên cốt men thảo dược sẽ giúp chiết xuất tối đa dược tính của cây thuốc mà không làm biến đổi mùi thơm tự nhiên."
  }
];

function handleAiQuestion(question) {
  const q = question.toLowerCase();
  let matched = null;

  for (const item of AI_KNOWLEDGE_BASE) {
    if (item.keywords.some(k => q.includes(k))) {
      matched = item.reply;
      break;
    }
  }

  if (!matched) {
    matched = "Cảm ơn quý khách đã quan tâm đến Rượu Men Lá Bằng Phúc! Chúng tôi có các dòng rượu nếp nương, rượu ngô men lá từ 35° đến 42° hạ thổ chum sành. Để được tư vấn chi tiết hơn theo khẩu vị riêng, quý khách có thể bấm gọi Hotline **0987.654.321** hoặc chat Zalo trực tiếp nhé!";
  }

  return matched;
}

function sendChatMessage(text) {
  if (!text) return;
  const container = document.getElementById("chatMessages");
  const now = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });

  // Append User message
  const userMsg = document.createElement("div");
  userMsg.className = "msg-bubble user";
  userMsg.innerHTML = `<p>${text}</p><span class="msg-time">${now}</span>`;
  container.appendChild(userMsg);
  container.scrollTop = container.scrollHeight;

  // Typing state
  const typingMsg = document.createElement("div");
  typingMsg.className = "msg-bubble bot";
  typingMsg.innerHTML = `<p style="font-style:italic;color:var(--gold-primary);">Đang tra cứu tinh hoa Bằng Phúc Tửu...</p>`;
  container.appendChild(typingMsg);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    typingMsg.remove();
    const answer = handleAiQuestion(text);
    const botMsg = document.createElement("div");
    botMsg.className = "msg-bubble bot";
    botMsg.innerHTML = `<p>${answer.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</p><span class="msg-time">${now}</span>`;
    container.appendChild(botMsg);
    container.scrollTop = container.scrollHeight;
  }, 600);
}

// ==========================================================================
// 8. INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render initial products
  renderProducts(PRODUCTS);
  setupFilters();
  updateCartUI();

  // Theme Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  const currentTheme = localStorage.getItem("bangphuc_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("bangphuc_theme", theme);
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-nav-item").forEach(item => {
      item.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
      });
    });
  }

  // Cart Drawer open/close
  const cartBtn = document.getElementById("cartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartDrawer) {
    cartDrawer.addEventListener("click", (e) => {
      if (e.target === cartDrawer) closeCart();
    });
  }
  if (checkoutBtn) checkoutBtn.addEventListener("click", openCheckout);

  // Quick View Modal close
  const closeQuickViewBtn = document.getElementById("closeQuickViewBtn");
  const quickViewModal = document.getElementById("quickViewModal");
  if (closeQuickViewBtn) closeQuickViewBtn.addEventListener("click", closeQuickView);
  if (quickViewModal) {
    quickViewModal.addEventListener("click", (e) => {
      if (e.target === quickViewModal) closeQuickView();
    });
  }

  // Checkout Modal close & submit
  const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
  const checkoutModal = document.getElementById("checkoutModal");
  const orderForm = document.getElementById("orderForm");
  const zaloOrderBtn = document.getElementById("zaloOrderBtn");

  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener("click", closeCheckout);
  if (checkoutModal) {
    checkoutModal.addEventListener("click", (e) => {
      if (e.target === checkoutModal) closeCheckout();
    });
  }
  if (orderForm) orderForm.addEventListener("submit", handleOrderSubmit);
  if (zaloOrderBtn) zaloOrderBtn.addEventListener("click", handleDirectZaloOrder);

  // Quick Contact Form in Contact section
  const contactForm = document.getElementById("quickContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const phone = document.getElementById("contactPhone").value.trim();
      const need = document.getElementById("contactNeed").value;
      const msg = document.getElementById("contactMsg").value.trim();

      showToast(`Cảm ơn bạn ${name}! HTX Bằng Phúc sẽ liên hệ SĐT ${phone} trong ít phút.`, "📞");
      contactForm.reset();
    });
  }

  // AI Chat input & suggestion buttons
  const chatInput = document.getElementById("chatInput");
  const chatSendBtn = document.getElementById("chatSendBtn");

  if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener("click", () => {
      const txt = chatInput.value.trim();
      if (txt) {
        sendChatMessage(txt);
        chatInput.value = "";
      }
    });

    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const txt = chatInput.value.trim();
        if (txt) {
          sendChatMessage(txt);
          chatInput.value = "";
        }
      }
    });
  }

  // Suggestion chips
  document.querySelectorAll(".chip-btn").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.dataset.query;
      sendChatMessage(q);
    });
  });

  // Back to top scroll listener
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.classList.add("active");
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove("active");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
