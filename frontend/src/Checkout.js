import React, { useState } from "react";

function Checkout({ cart, onCheckout }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    fetch("http://localhost:4000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        cartItems: cart,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReceipt(data.receipt);
        onCheckout();
      })
      .catch((err) => console.error("Error during checkout:", err));
  };

  if (receipt) {
    return (
      <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2>✅ Receipt</h2>
        <p><strong>Name:</strong> {receipt.name}</p>
        <p><strong>Email:</strong> {receipt.email}</p>
        <p><strong>Total:</strong> ₹{receipt.total}</p>
        <p><strong>Time:</strong> {new Date(receipt.timestamp).toLocaleString()}</p>
        <button onClick={() => setReceipt(null)}>Close</button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>🧾 Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "8px", margin: "5px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "8px", margin: "5px" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
