const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Mock products
const products = [
  { id: "p1", name: "T-Shirt", price: 399 },
  { id: "p2", name: "Sneakers", price: 2499 },
  { id: "p3", name: "Cap", price: 299 },
  { id: "p4", name: "Jeans", price: 1299 },
  { id: "p5", name: "Watch", price: 999 },
];

let cart = []; // { id, productId, qty }

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get cart + total
app.get("/api/cart", (req, res) => {
  const items = cart.map((c) => {
    const p = products.find((x) => x.id === c.productId);
    return { id: c.id, name: p.name, price: p.price, qty: c.qty };
  });
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  res.json({ items, total });
});

// Add to cart
app.post("/api/cart", (req, res) => {
  const { productId, qty } = req.body;
  if (!productId || !qty) return res.status(400).json({ error: "Missing productId or qty" });
  const id = Date.now().toString();
  cart.push({ id, productId, qty });
  res.status(201).json({ id, productId, qty });
});

// Remove item
app.delete("/api/cart/:id", (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.id !== id);
  res.status(204).send();
});

// Checkout
app.post("/api/checkout", (req, res) => {
  const { cartItems, name, email } = req.body;
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const receipt = {
    name,
    email,
    total,
    timestamp: new Date().toISOString(),
  };
  cart = [];
  res.json({ receipt });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
