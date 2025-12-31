import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

function ProductList() {
  const [page, setPage] = useState(1);

  // ⭐ search + sort states
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");

  const { addToCart } = useCart();
  const { showToast } = useToast();

  const { data, isLoading, isError } = useProducts(page);

  if (isLoading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
  if (isError || !data) return <h2 style={{ textAlign: 'center' }}>Error loading products</h2>;

  // ⭐ base data clone
  let finalProducts = [...(data.items ?? [])];

  // 🔍 SEARCH filter
  finalProducts = finalProducts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // 🔽 SORTING
  if (sort === "low-high") finalProducts.sort((a, b) => a.price - b.price);
  if (sort === "high-low") finalProducts.sort((a, b) => b.price - a.price);

  return (
    <div
      style={{
        padding: '30px',
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f2fe 0%, #fdf2f8 50%, #fef9c3 100%)"
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: "26px" }}>
        🛍 Products (Page {page})
      </h2>

      {/* 🔍 Search + 🔽 Sort UI */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "15px",
          flexWrap: "wrap"
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px 12px", width: "260px" }}
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{ padding: "8px 12px" }}
        >
          <option value="none">Sort by</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* GRID 3 × 3 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px',
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        {finalProducts.map((p) => (
          <div
            key={p.id}
            style={{
              background: "white",
              padding: "18px",
              borderRadius: "18px",
              boxShadow: "0 12px 35px rgba(0,0,0,0.10)",
              textAlign: "center",
              transition: "0.25s",
              position: "relative",
              border: "1px solid #f1f1f1",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-6px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >

            {/* CATEGORY BADGE */}
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#eef2ff",
                padding: "4px 10px",
                borderRadius: "14px",
                fontSize: "12px",
                textTransform: "capitalize",
              }}
            >
              {p.category}
            </div>

            {/* CLICK TO DETAILS */}
            <Link to={`/product/${p.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: '160px',
                  height: '160px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />

              <h4 style={{ fontSize: '15px', minHeight: '50px' }}>
                {p.title}
              </h4>
            </Link>

            {/* RATING */}
            <div style={{ marginBottom: "6px" }}>
              ⭐ {p.rating?.rate}
              <span style={{ color: "gray" }}> ({p.rating?.count})</span>
            </div>

            {/* PRICE */}
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>₹{p.price}</p>

            {/* ADD TO CART */}
            <button
              onClick={() => {
                addToCart(p);
                showToast("🛒 Added to cart");
              }}
              style={{
                padding: '9px 16px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                background: 'linear-gradient(135deg,#4ade80,#16a34a)',
                color: 'white',
                fontSize: '14px',
              }}
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
        }}
      >
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          ⬅️ Previous
        </button>

        <span style={{ fontSize: '18px' }}>
          Page {page} / {data.totalPages}
        </span>

        <button
          disabled={page === data.totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}

export default ProductList;
