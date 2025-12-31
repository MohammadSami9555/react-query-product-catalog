import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return <h2 style={{ padding: 20 }}>No items in Wishlist</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Wishlist ❤️</h2>

      <ul>
        {wishlist.map(item => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            {item.title} – ₹{item.price}

            <button
              onClick={() => toggleWishlist(item)}
              style={{ marginLeft: 10 }}
            >
              Remove ❌
            </button>

            <button
              onClick={() => addToCart(item)}
              style={{ marginLeft: 10 }}
            >
              Add to Cart 🛒
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishlistPage;
