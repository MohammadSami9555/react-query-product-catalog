import { useCart } from '../context/CartContext';

function CartItems() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h3>No items in cart</h3>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ₹{item.price} × {item.qty}
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

export default CartItems;
