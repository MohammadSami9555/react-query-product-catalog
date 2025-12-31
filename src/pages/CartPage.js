import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  if (cart.length === 0) {
    return <h2 style={{ padding: "20px" }}>No items in cart</h2>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map(item => (
          <li
            key={item.id}
            style={{
              marginBottom: "12px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* title + price */}
            <div style={{ width: "50%" }}>
              {item.title}
              <div style={{ fontWeight: "bold" }}>₹{item.price}</div>
            </div>

            {/* qty controls */}
            <div>
              <button
                onClick={() => decreaseQty(item.id)}
                style={{ padding: "4px 8px" }}
              >
                ➖
              </button>

              <span style={{ margin: "0 10px", fontWeight: "bold" }}>
                {item.qty}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                style={{ padding: "4px 8px" }}
              >
                ➕
              </button>
            </div>

            {/* remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                padding: "5px 10px",
                color: "white",
                background: "red",
                borderRadius: "6px",
                border: "none",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
