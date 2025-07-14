# 🛒 Flipkart Clone

> ⚡️ **A Modern Flipkart-style E-commerce Clone** — responsive, dynamic, modular.  
> 📌 **Status:** Work in Progress 🚀

---

## 📂 Project Overview

| 📁 File/Folder | 📑 Purpose |
|----------------|------------|
| `index.html` | 🏠 Homepage |
| `cart.html` | 🛒 Cart Page |
| `mobile.html` | 📱 Mobiles Listing |
| `televisions.html` | 📺 Televisions Listing |
| `partials/` | ♻️ Navbar, Footer, Categories |
| `js/` | ⚙️ All JS (Products, Cart, Filters) |
| `css/` | 🎨 Tailwind & Custom Styles |
| `assets/` | 📂 Images, Logos, Screenshots |
| `README.md` | 📘 Project Guide |

---

## ✨ Key Features

✅ **Reusable Navbar & Footer** — `partials/` + `fetch` → DRY code.  
✅ **Dynamic Category Pages** — Mobiles & Televisions with unique APIs.  
✅ **Product Filters** — Sidebar filters on TVs page (brands, price, etc.).  
✅ **Add to Cart** — One-click add, saved in LocalStorage.  
✅ **Cart Page** — Shows added items dynamically.  
✅ **Search Bar** — Search products, redirect to category.  
✅ **Responsive Mobile Sidebar** — Toggle menu for mobile UX.  
✅ **OTP Verification UI** — Clean, modern Flipkart-style.  
✅ **Tailwind-based Design** — Flipkart feel with custom tweaks.

---

## 🧩 How the Logic Works

**🔹 Reusable UI:**  
- All pages load `navbar.html` + `footer.html` using `fetch()` → same design everywhere.

**🔹 Dynamic Products:**  
- Uses `DummyJSON API` to get real product data → maps cards dynamically with JS.

**🔹 Add to Cart:**  
- `addToCart(id)` → saves product in `LocalStorage`.  
- `cart.html` reads saved cart → generates dynamic list.

**🔹 Filters:**  
- TVs page has filter sidebar → filters cards by selected brand or range.

**🔹 Mobile Sidebar:**  
- Mobile toggle button opens/closes sidebar menu → smooth UX.

**🔹 OTP Flow:**  
- Toast popup shows OTP → 3s loader → homepage redirect.

---

## 🗂️ Next Milestones

🔐 User Login/Signup  
💳 Checkout & Payment Integration  
📦 Order History & Tracking  
⚙️ Admin Dashboard (Product CRUD)

---

## 🚀 How to Run

```bash
git clone https://github.com/AnkitSabariya/Flipcart_Clone.git
