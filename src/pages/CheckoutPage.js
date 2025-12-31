import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {

  const { cart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function placeOrder() {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all details");
      return;
    }

    alert("🎉 Order placed successfully!");
    navigate("/");
  }

  return (
    <div style={{ padding: 20 }}>

      <h2>Checkout 🧾</h2>

      {/* Address Form */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 25
        }}
      >

        <div>
          <h3>Shipping Details</h3>

          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ display: "block", marginBottom: 10, padding: 8, width: "90%" }}
          />

          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={{ display: "block", marginBottom: 10, padding: 8, width: "90%" }}
          />

          <textarea
            placeholder="Full Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            style={{ display: "block", marginBottom: 10, padding: 8, width: "90%" }}
            rows={4}
          />

          <button
            onClick={placeOrder}
            style={{
              padding: "10px 15px",
              background: "#2ecc71",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            ✅ Place Order
          </button>
        </div>

        {/* Order Summary */}
        <div>
          <h3>Order Summary 🛍️</h3>

          {cart.map(item => (
            <p key={item.id}>
              {item.title.slice(0, 25)}… × {item.qty} = ₹
              {(item.price * item.qty).toFixed(2)}
            </p>
          ))}

          <h2>Total: ₹{total.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
