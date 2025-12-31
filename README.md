🛍️ React Query Product Catalog — Mini E-Commerce App
----
A modern e-commerce product catalog built using React + React Query + Context API, featuring:

Product listing

Pagination

Search & filtering

Price sorting

Cart & Wishlist

Product details

Toast notifications

LocalStorage persistence

This project demonstrates real-world frontend concepts like API caching, state management, optimistic updates and UI/UX best practices.


🚀 Tech Stack
----

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| **React**        | UI Library                  |
| **React Router** | Page Navigation             |
| **React Query**  | API Caching & Data Fetching |
| **Axios**        | API Calls                   |
| **Context API**  | Cart & Wishlist state       |
| **LocalStorage** | Data Persistence            |
| **FakeStoreAPI** | Demo Products API           |

'''
🎯 Core Features

✅ Product Catalog

✔ Fetch products using API
✔ React Query based caching
✔ 3×3 responsive product grid
✔ Image, title, price, rating

🧭 Pagination

✔ Page navigation
✔ “Next / Previous” buttons
✔ Total pages count

🔍 Search

✔ Search by product title
✔ Case-insensitive matching

🔽 Sorting

✔ Price — Low → High
✔ Price — High → Low

🛒 Cart System

✔ Add to cart
✔ Quantity + / − buttons
✔ Remove item
✔ Auto total calculation
✔ Data saved in LocalStorage

❤️ Wishlist

✔ Add / remove wishlist items
✔ Separate wishlist page

🔔 Toast Notifications

✔ Added to cart message
✔ Good UX feedback

🧾 Product Details Page

✔ View full product info
✔ Description, price, rating

'''


📂 Folder Structure

'''
src/
 ├── components/
 │   └── Navbar.jsx
 ├── pages/
 │   ├── ProductList.jsx
 │   ├── ProductDetails.jsx
 │   ├── CartPage.jsx
 │   └── WishlistPage.jsx
 ├── context/
 │   ├── CartContext.js
 │   ├── WishlistContext.js
 │   └── ToastContext.js
 ├── hooks/
 │   ├── useProducts.js
 │   └── useProduct.js
 ├── queryClient.js
 ├── App.js
 └── index.js

'''

⚡ React Query — What & Why?
----
React Query is used to:

✔ Fetch API data
✔ Cache responses
✔ Avoid repeated network calls
✔ Automatically refetch stale data
✔ Manage loading & error states

🔑 Query Key
--
queryKey: ['products', page]
👉 changes per page → new cached dataset


⏳ Stale Time
--
staleTime: 5 * 60 * 1000
✔ Data stays “fresh” for 5 mins
✔ Prevents unnecessary refetch

🎯 Select Function (Client Pagination)
----
select: (data) => {
  const pageSize = 9;
  const start = (page - 1) * pageSize;
  return {
    items: data.slice(start, start + pageSize),
    totalPages: Math.ceil(data.length / pageSize),
  };
}

👉 Powerful feature of React Query
👉 Performs transformation without extra re-render

🧠 Cart Logic Highlights
----
➕ Add to Cart
--
if (existing) qty++
else add new

➖ Decrease Quantity

removes automatically at 0

💾 Persistence
--
localStorage.setItem('cart', JSON.stringify(cart))


🛠️ Installation & Running Locally
----
git clone <repo-url>
cd react-query-product-catalog
npm install
npm start

App runs at:

http://localhost:3000


🧪 Future Enhancements
----
🔐 Login / Signup (JWT / Firebase)

💳 Payment gateway integration

📱 Fully responsive design

🎨 Tailwind / Material UI theme

📦 Admin — Add Product Dashboard

⭐ Review & rating system

🌓 Dark / Light mode

'''
🏁 Learning Outcomes
----
By completing this project, you understand:

✔ React functional components
✔ React Hooks (useState, useEffect, useContext)
✔ React Router navigation
✔ React Query caching & pagination
✔ Client-side state management
✔ LocalStorage persistence
✔ Real-world e-commerce logic
'''
