import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function MiniCart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div
        style={{
          position: "absolute",
          top: "55px",
          right: 0,
          width: "260px",
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <p style={{ textAlign: "center" }}>Cart is empty</p>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "55px",
        right: 0,
        width: "300px",
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 20
      }}
    >
      <h4>🛒 Mini Cart</h4>

      <ul>
        {cart.map(item => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {item.title.slice(0, 20)}…
            <br />
            ₹{item.price} × {item.qty}

            <button
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: "8px", color: "red" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <Link to="/cart">
        <button
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "8px",
            border: "none",
            background: "#2ecc71",
            color: "white",
            cursor: "pointer"
          }}
        >
          Go to Cart
        </button>
      </Link>
    </div>
  );
}

export default MiniCart;
