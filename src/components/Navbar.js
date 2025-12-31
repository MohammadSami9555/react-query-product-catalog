import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MiniCart from './MiniCart';

function Navbar() {

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // mini cart open/close state
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 25px',
        borderBottom: '1px solid #ddd',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        background: 'white',
        zIndex: 10,
      }}
    >
      {/* Brand Logo */}
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h2 style={{ margin: 0 }}>🛍️ React Store</h2>
      </Link>

      {/* Menu Center */}
      <div style={{ display: 'flex', gap: '20px', fontSize: '18px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          🏠 Home
        </Link>

        <span style={{ opacity: 0.6 }}>
          📦 My Orders
        </span>

        <Link
          to="/wishlist"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          ❤️ Wishlist (<b>{wishlist.length}</b>)
        </Link>
      </div>

      {/* Cart Right + Mini Cart */}
      <div style={{ position: 'relative' }}>
        <span
          style={{ fontSize: '18px', cursor: 'pointer' }}
          onClick={() => setOpen(o => !o)}
        >
          🛒 Cart: <b>{cart.length}</b>
        </span>

        {open && <MiniCart />}
      </div>
    </div>
  );
}

export default Navbar;
