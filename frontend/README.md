🛍️ ShopNest

ShopNest is a full-stack e-commerce web application built using the MERN stack — MongoDB, Express.js, React.js, and Node.js.

It provides a complete online shopping experience where users can browse products, manage their cart, place orders, and make payments. It also includes an admin panel for managing products, users, and orders.

⸻

🌐 Features

👤 User Features

* 🔐 User registration and login
* 🔑 JWT-based authentication
* 🛍️ Browse available products
* 🔎 View product details
* 🛒 Add products to cart
* ➕ Increase/decrease product quantity
* 🗑️ Remove products from cart
* 💳 Checkout and payment
* 📦 Place orders
* 📋 View order details
* 📧 Order confirmation through email
* 👤 User account management

👨‍💼 Admin Features

* 🔐 Admin authentication
* 📦 Add new products
* ✏️ Update products
* 🗑️ Delete products
* 📊 Manage orders
* 👥 Manage users
* 📈 View store analytics
* 🖼️ Upload product images

⸻

🛠️ Tech Stack

Frontend

* ⚛️ React.js
* 🎨 HTML5
* 🎨 CSS3
* 🟨 JavaScript
* 🔄 Redux / Redux Toolkit
* 🧭 React Router
* ⚡ Vite

Backend

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 🐍 Mongoose
* 🔐 JWT Authentication
* 📧 Nodemailer
* 📤 Multer
* ☁️ Cloudinary
* 💳 Razorpay

Development Tools

* 💻 VS Code
* 🧪 Postman
* 🐙 Git & GitHub
* 🔄 Nodemon

⸻

📁 Project Structure

ShopNest/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── redux/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── uploads/
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md

⸻

⚙️ Installation

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project

cd ShopNest

3. Install dependencies

Install frontend dependencies:

cd frontend
npm install

Install backend dependencies:

cd ../backend
npm install

⸻

▶️ Running the Application

Start the entire ShopNest application with a single command from the project root:

npm run dev

This command starts both the React frontend and Node.js/Express backend simultaneously.

🌐 Application

Once the development server is running, open the frontend URL shown in your terminal.

The backend API runs on:

http://localhost:5000

Note: The frontend URL depends on your Vite configuration and will be displayed in the terminal when you run npm run dev.

⸻

🔑 Authentication

ShopNest uses JWT (JSON Web Token) authentication.

The authentication flow includes:

User Login
    ↓
Backend validates credentials
    ↓
JWT Token generated
    ↓
Token stored on client
    ↓
Protected API requests
    ↓
Backend verifies JWT
    ↓
User/Admin access granted

⸻

💳 Payment Integration

ShopNest integrates Razorpay for online payments.

The payment flow is:

Cart
  ↓
Checkout
  ↓
Create Payment Order
  ↓
Razorpay Payment
  ↓
Payment Verification
  ↓
Create Order
  ↓
Order Confirmation

⸻

📧 Email Notifications

ShopNest uses Nodemailer to send emails to users.

Emails can be used for:

* 📩 Order confirmation
* 🧾 Order details
* 👤 Account-related notifications

For Gmail, use a Google App Password instead of your normal Gmail password.

⸻

🖼️ Image Upload

Product images are uploaded using Multer and can be stored using Cloudinary.

The general flow is:

Admin selects image
        ↓
Multer processes upload
        ↓
Cloudinary stores image
        ↓
Image URL saved with product
        ↓
Frontend displays product image

⸻

🗄️ Database

ShopNest uses MongoDB with Mongoose.

Main collections/models include:

* 👤 Users
* 📦 Products
* 🛒 Orders

⸻

🔒 Security

The project includes:

* JWT authentication
* Protected routes
* Admin authorization
* Password protection
* Environment variables for secrets
* Server-side validation
* CORS configuration

⸻

📱 Responsive Design

ShopNest is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

⸻

🚀 Future Improvements

Some features that can be added in future versions:

* ⭐ Product reviews and ratings
* ❤️ Wishlist
* 🔔 Real-time order notifications
* 🎟️ Coupon and discount system
* 📊 Advanced admin dashboard
* 🔍 Advanced product filtering
* 📱 Improved mobile UI
* 🚚 Order tracking
* 🌙 Dark mode

⸻

👨‍💻 Author

Nirmal Kumar

MERN Stack Developer

Technologies

MongoDB • Express.js • React.js • Node.js
JavaScript • Redux • JWT • Razorpay
Cloudinary • Nodemailer • Git • GitHub

⸻

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

⸻

📄 License

This project is created for learning and development purposes.