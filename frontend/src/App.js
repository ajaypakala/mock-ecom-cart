import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Load products
  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Add to cart (call backend)
  const addToCart = (productId) => {
    fetch("http://localhost:4000/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, qty: 1 }),
    })
      .then((res) => res.json())
      .then(() => loadCart())
      .catch((err) => console.error("Error adding to cart:", err));
  };

  // Load cart from backend
  const loadCart = () => {
    fetch("http://localhost:4000/api/cart")
      .then((res) => res.json())
      .then((data) => setCart(data.items || []))
      .catch((err) => console.error("Error loading cart:", err));
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    fetch(`http://localhost:4000/api/cart/${id}`, { method: "DELETE" })
      .then(() => loadCart())
      .catch((err) => console.error("Error removing item:", err));
  };

  // Load cart initially
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛍️ Vibe Commerce - Mock Cart</h1>

      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button
              onClick={() => addToCart(p.id)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <Cart cart={cart} onRemove={removeFromCart} />
      {/* Checkout Section */}
      <Checkout cart={cart} onCheckout={() => setCart([])} />

    </div>
  );
}

export default App;
