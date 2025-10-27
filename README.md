🛒 Mock E-Com Cart — Full Stack E-Commerce App
📘 Overview

This is a full-stack shopping cart application built for the Nexora Internship Assignment.
It demonstrates essential e-commerce functionalities — including product listing, cart management, and checkout — using modern web technologies.

⚙️ Tech Stack

Frontend: React (with Hooks, useState, useEffect)
Backend: Node.js, Express.js
Database: MongoDB (or mock data for demonstration)
API: REST-based communication between frontend and backend

🚀 Features

✅ Display mock products (fetched from backend)
✅ Add/remove items to/from cart
✅ View cart with item quantity and total
✅ Simple checkout form with mock receipt
✅ Responsive design for all devices
✅ REST API integration between frontend & backend

🧠 API Endpoints
Method	Endpoint	Description
GET	/api/products	Fetch list of mock products
POST	/api/cart	Add item to cart
DELETE	/api/cart/:id	Remove item from cart
GET	/api/cart	Get cart items + total
POST	/api/checkout	Generate mock receipt
🧩 Folder Structure
mock-ecom-cart/
│
├── backend/
│   ├── src/
│   │   ├── index.js        # Express server
│   │   ├── routes/         # API routes
│   │   └── data/           # Mock product data
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── Cart.js         # Cart management
│   │   ├── Checkout.js     # Checkout page
│   │   └── index.js
│   └── package.json
│
└── README.md

🖥️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/ajaypakala/mock-ecom-cart.git
cd mock-ecom-cart

2️⃣ Setup & Run Backend
cd backend
npm install
npm run dev


Backend runs on: http://localhost:4000

3️⃣ Setup & Run Frontend
cd ../frontend
npm install
npm start


Frontend runs on: http://localhost:3000