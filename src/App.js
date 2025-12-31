import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<ProductList />} />

        {/* Cart page */}
        <Route path="/cart" element={<CartPage />} />

        {/* Wishlist page */}
        <Route path="/wishlist" element={<WishlistPage />} />

        {/* Checkout page */}
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Product details page */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
