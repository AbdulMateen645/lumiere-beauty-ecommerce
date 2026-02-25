<div align="center">
  <h1>✨ Lumière Beauty - Premium Skincare E-Commerce</h1>
  <p><strong>A modern, elegant e-commerce frontend for luxury beauty products</strong></p>
  <p>
    <img src="https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.8.2-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.2.0-purple?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-4.1.14-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  </p>
</div>

---

## 🌟 Overview

**Lumière Beauty** is a premium skincare e-commerce platform featuring a sophisticated, modern design. This is a **frontend demo** showcasing a fully functional shopping experience with:

- 🛍️ **20+ Premium Products** across 4 categories (Skincare, Makeup, Haircare, Fragrance)
- 🛒 **Shopping Cart & Wishlist** with persistent state management
- 💳 **Complete Checkout Flow** with form validation
- 📱 **Fully Responsive Design** optimized for all devices
- ✨ **Smooth Animations** using Framer Motion
- 🎨 **Professional UI/UX** with Tailwind CSS

> **Note:** This is a frontend-only demo. Backend integration and payment processing will be implemented in the full version.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lumière-beauty---premium-skincare-e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file** (optional for this demo)
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

---

## 🎯 Features

### 🏠 Pages
- **Home** - Hero section, featured products, categories, testimonials
- **Shop** - Product grid with filtering and search
- **Product Details** - Full product information with image gallery
- **Cart** - Shopping cart management
- **Checkout** - Multi-step checkout process
- **Wishlist** - Save favorite products
- **About** - Brand story and values
- **Contact** - Contact form
- **Login/Register** - Authentication UI (frontend only)

### 🛠️ Technical Features
- ⚡ **Vite** for lightning-fast development
- 🎨 **Tailwind CSS 4** for modern styling
- 🔄 **React Router** for seamless navigation
- 📦 **Context API** for state management
- 🎭 **Framer Motion** for smooth animations
- 🔔 **React Hot Toast** for notifications
- 📱 **Mobile-first responsive design**
- ♿ **Accessibility compliant**

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartItem.tsx
│   └── ...
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── ProductDetails.tsx
│   └── ...
├── context/         # React Context providers
│   ├── CartContext.tsx
│   └── WishlistContext.tsx
├── data/            # Mock data
│   └── products.ts
├── utils/           # Utility functions
│   └── cn.ts
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

---

## 🎨 Design Highlights

- **Color Palette:** Soft beige, rose pink, and slate gray for elegance
- **Typography:** Modern sans-serif with display fonts for headings
- **Layout:** Clean, spacious design with generous whitespace
- **Imagery:** High-quality product photography from Unsplash
- **Animations:** Subtle hover effects and page transitions

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove dist folder |

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📝 Next Steps (Full Version)

When moving to production, the following will be implemented:

- ✅ Backend API integration (Node.js/Express or your preferred stack)
- ✅ Database integration (MongoDB, PostgreSQL, etc.)
- ✅ User authentication & authorization
- ✅ Payment gateway integration (Stripe, PayPal)
- ✅ Order management system
- ✅ Admin dashboard
- ✅ Email notifications
- ✅ Product reviews & ratings
- ✅ Inventory management
- ✅ SEO optimization

---

## 📄 License

This project is for demonstration purposes.

---

## 🤝 Contact

For customization and backend integration inquiries, please contact the development team.

---

<div align="center">
  <p>Made with ❤️ for premium beauty experiences</p>
</div>
