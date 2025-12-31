import { useParams, Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useProduct(id);
  const { addToCart } = useCart();

  if (isLoading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (isError) return <h2 style={{ textAlign: "center" }}>Error loading product</h2>;

  return (
    <div style={{ padding: "30px", display: "flex", gap: "40px" }}>
      
      {/* LEFT — BIG IMAGE */}
      <img
        src={data.image}
        alt={data.title}
        style={{
          width: "320px",
          height: "320px",
          objectFit: "contain",
          border: "1px solid #eee",
          borderRadius: "12px",
          padding: "10px"
        }}
      />

      {/* RIGHT — DETAILS */}
      <div>
        {/* Category badge */}
        <div
          style={{
            display: "inline-block",
            background: "#f1f1f1",
            padding: "4px 10px",
            borderRadius: "12px",
            fontSize: "12px",
            textTransform: "capitalize",
            marginBottom: "10px"
          }}
        >
          {data.category}
        </div>

        <h2>{data.title}</h2>

        {/* rating */}
        <p>
          ⭐ {data.rating?.rate}
          <span style={{ color: "gray" }}> ({data.rating?.count} reviews)</span>
        </p>

        <h2 style={{ color: "green" }}>₹{data.price}</h2>

        <p style={{ maxWidth: "600px" }}>{data.description}</p>

        <button
          onClick={() => addToCart(data)}
          style={{
            padding: "10px 18px",
            background: "#2ecc71",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px"
          }}
        >
          🛒 Add to Cart
        </button>

        <br /><br />

        <Link to="/">⬅️ Back to Products</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
