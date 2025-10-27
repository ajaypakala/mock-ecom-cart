# 🛒 Mock E-Com Cart — Full Stack E-Commerce App

---

## 📘 Overview

This is a **full-stack shopping cart application** built for the **Nexora Internship Assignment**.  
It demonstrates essential e-commerce functionalities — including **product listing**, **cart management**, and **checkout** — using modern web technologies.

---

## ⚙️ Tech Stack

| Layer     | Technology Used                         |
|------------|------------------------------------------|
| Frontend   | React (Hooks: `useState`, `useEffect`)  |
| Backend    | Node.js, Express.js                     |
| Database   | MongoDB *(or mock data for demo)*       |
| API        | REST-based communication                |

---

## 🚀 Features

| ✅ Feature | Description |
|------------|-------------|
| 🛍️ Product Display | Fetch and display mock products from backend |
| ➕ Cart Add/Remove | Add or remove products from the cart |
| 🧮 Cart Summary | View item quantity and total price |
| 💳 Checkout | Mock checkout form with generated receipt |
| 📱 Responsive UI | Works seamlessly on all devices |
| 🔗 REST API | Integration between frontend and backend |

---

## 🧠 API Endpoints

| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| GET    | `/api/products`   | Fetch list of mock products  |
| POST   | `/api/cart`       | Add item to cart             |
| DELETE | `/api/cart/:id`   | Remove item from cart        |
| GET    | `/api/cart`       | Get all cart items + total   |
| POST   | `/api/checkout`   | Generate mock receipt        |

---

## 🧩 Folder Structure

```bash
mock-ecom-cart/
│
├── backend/                      # Backend service
│   ├── src/
│   │   ├── index.js              # Entry point (Express server)
│   │   ├── routes/               # API route handlers
│   │   └── data/                 # Mock product data (JSON)
│   │
│   ├── package.json              # Backend dependencies
│   └── README.md
│
├── frontend/                     # Frontend service (React)
│   ├── src/
│   │   ├── App.js                # Main React component
│   │   ├── Cart.js               # Cart management component
│   │   ├── Checkout.js           # Checkout page component
│   │   ├── index.js              # React entry point
│   │   ├── App.css               # App styles
│   │   └── index.css             # Global styles
│   │
│   ├── public/                   # Static files
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── favicon.ico
│   │
│   ├── package.json              # Frontend dependencies
│   └── README.md
│
└── README.md                     # Project overview (this file)


## 🖥️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ajaypakala/mock-ecom-cart.git
cd mock-ecom-cart

2️⃣ Setup & Run Backend

bash
cd backend
npm install
npm run dev
👉 Backend runs on: http://localhost:4000

3️⃣ Setup & Run Frontend

bash
cd ../frontend
npm install
npm start
👉 Frontend runs on: http://localhost:3000

👨‍💻 Author

Ajaybabu Pakala
GitHub: @ajaypakala

⭐ If you like this project, please give it a star on GitHub!