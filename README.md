🛒 ShopNest — MERN Stack E-Commerce Platform

ShopNest is a full-stack e-commerce web application built using the MERN Stack. It provides a complete online shopping experience with user authentication, product management, shopping cart, checkout, online payments, order management, admin controls, image uploads, and email notifications.

🌐 Live Demo

🚀 Live Website:
https://shopnest-mern-zrgs.onrender.com/

💻 GitHub Repository:
https://github.com/NirmalKumar-1/ShopNest-MERN

⸻

📸 Project Overview

ShopNest is designed as a modern full-stack e-commerce platform with separate functionality for customers and administrators.

👤 Customer Features

* User Registration
* User Login
* JWT-based Authentication
* Browse Products
* View Product Details
* Add Products to Cart
* Update Cart Quantity
* Remove Products from Cart
* Checkout
* Online Payment Integration
* Place Orders
* View My Orders
* Order Status Tracking
* Email Notifications
* Responsive User Interface

👨‍💼 Admin Features

* Admin Authentication
* Admin Dashboard
* Product Management
* Add Products
* Update Products
* Delete Products
* View All Orders
* View Customer Information
* Update Order Status
* Order Management
* Analytics Dashboard

⸻

✨ Features

🔐 Authentication & Authorization

* User registration and login
* JWT authentication
* Protected routes
* Admin-only routes
* Password security
* Authentication state management

🛍️ Product Management

Admins can:

* Add products
* Upload product images
* Update product information
* Delete products
* Manage product stock
* Manage product prices
* Manage product categories

Customers can:

* Browse products
* View product details
* Add products to cart
* Manage cart items

🛒 Shopping Cart

The shopping cart supports:

* Add to cart
* Remove from cart
* Increase quantity
* Decrease quantity
* Automatic total calculation
* Cart state management using Redux

💳 Payment

ShopNest integrates Razorpay for online payment processing.

Payment flow:

Cart
  ↓
Checkout
  ↓
Create Payment
  ↓
Razorpay
  ↓
Payment Verification
  ↓
Create Order

📦 Order Management

Customers can:

* Place orders
* View their orders
* Track order status

Admins can:

* View all orders
* View customer information
* Update order status

Order statuses:

Pending
   ↓
Shipped
   ↓
Delivered

📧 Email Notifications

ShopNest uses Nodemailer to send email notifications to users.

Email functionality can be used for:

* Welcome emails
* Registration notifications
* Order confirmation
* Order-related notifications

☁️ Image Upload

Product images are handled using:

* Multer
* Cloudinary

This allows product images to be uploaded and stored remotely rather than directly inside the application server.

📊 Admin Analytics

The admin section includes analytics functionality for monitoring important e-commerce information such as:

* Orders
* Products
* Sales
* Users

⸻

🛠️ Tech Stack

Frontend

Technology	Purpose
React.js	Frontend UI
React Router	Client-side routing
Redux	State management
Redux Toolkit	Redux state management
CSS	Styling
JavaScript	Application logic

Backend

Technology	Purpose
Node.js	Backend runtime
Express.js	REST API
MongoDB	Database
Mongoose	MongoDB ODM
JWT	Authentication
Multer	File uploads
Nodemailer	Email service

Third-Party Services

Service	Purpose
MongoDB Atlas	Cloud database
Cloudinary	Image storage
Razorpay	Online payments
Render	Deployment

⸻

🏗️ Project Architecture

ShopNest
│
├── backend
│   │
│   ├── config
│   │   ├── db.js
│   │   └── cloudinary.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── analyticsController.js
│   │   ├── orderController.js
│   │   ├── paymentController.js
│   │   └── productController.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── adminMiddleware.js
│   │
│   ├── model
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Review.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── analyticsRoutes.js
│   │
│   ├── utils
│   │   └── sendEmail.js
│   │
│   ├── index.js
│   ├── seed.js
│   └── package.json
│
├── frontend
│   │
│   ├── public
│   │   └── dp.JPG
│   │
│   ├── src
│   │   ├── admin
│   │   ├── components
│   │   ├── context
│   │   ├── redux
│   │   ├── pages
│   │   └── styles
│   │
│   └── package.json
│
├── package.json
└── README.md

⸻

🔄 Application Flow

Customer Flow

User
 │
 ├── Register
 │
 ├── Login
 │
 ├── Browse Products
 │
 ├── Add to Cart
 │
 ├── Checkout
 │
 ├── Razorpay Payment
 │
 ├── Order Created
 │
 └── Track Order

Admin Flow

Admin Login
     │
     ↓
Admin Dashboard
     │
     ├── Manage Products
     │
     ├── Manage Orders
     │
     ├── Update Order Status
     │
     └── View Analytics

⸻

🔑 API Endpoints

Authentication

Register

POST /api/auth/register

Login

POST /api/auth/login

Get Users

GET /api/auth/users

⸻

Products

Get Products

GET /api/products

Get Product

GET /api/products/:id

Create Product

POST /api/products

Update Product

PUT /api/products/:id

Delete Product

DELETE /api/products/:id

⸻

Orders

Create Order

POST /api/orders

Get My Orders

GET /api/orders/myorders

Get All Orders

GET /api/orders

Update Order Status

PUT /api/orders/:id/status

Example:

{
  "status": "shipped"
}

Available statuses:

pending
shipped
delivered

⸻

Payment

Payment endpoints are available under:

/api/payment

⸻

Analytics

Analytics endpoints are available under:

/api/analytics

⸻

🚀 Getting Started

Follow these steps to run ShopNest locally.

1. Clone the Repository

git clone https://github.com/NirmalKumar-1/ShopNest-MERN.git

Move into the project:

cd ShopNest-MERN

⸻

📦 Installation

Install Root Dependencies

npm install

Install Backend Dependencies

cd backend
npm install

Install Frontend Dependencies

cd ../frontend
npm install

Return to the project root:

cd ..

⸻

🔐 Environment Variables

Create a .env file inside the backend directory.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_google_app_password

⚠️ Never upload your .env file to GitHub.

Make sure .env is included in .gitignore.

⸻

▶️ Run the Application

From the project root:

npm run dev

This starts the frontend and backend together.

Typical development setup:

Frontend → http://localhost:3000
Backend  → http://localhost:5000

⸻

🧪 Production Build

To create the React production build:

cd frontend
npm run build

The production files will be generated inside:

frontend/build

⸻

🌍 Deployment

ShopNest is deployed using Render.

Production Website

https://shopnest-mern-zrgs.onrender.com/

The application uses:

GitHub
   ↓
Render
   ↓
ShopNest

Whenever changes are pushed to the main branch, Render can automatically deploy the updated application.

⸻

🔒 Security

The application uses several security mechanisms:

* JWT authentication
* Protected API routes
* Admin authorization
* Environment variables for secrets
* Password protection
* Server-side payment verification

Never expose:

MONGO_URI
JWT_SECRET
RAZORPAY_KEY_SECRET
CLOUDINARY_API_SECRET
EMAIL_PASSWORD

in your source code or GitHub repository.

⸻

🧰 Development Tools

The project was developed using:

* Visual Studio Code
* Git
* GitHub
* Postman
* MongoDB Atlas
* Render

⸻

🐛 Troubleshooting

MongoDB Connection Error

Check:

MONGO_URI=...

and make sure your MongoDB Atlas network access allows your deployment/server to connect.

JWT Authentication Error

Check:

JWT_SECRET=...

Make sure the same secret is used consistently by the backend.

Razorpay Payment Error

Check:

RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...

Make sure the correct Razorpay credentials are configured.

Email Authentication Error

For Gmail, use a Google App Password rather than your normal Gmail password.

⸻

📁 Git Workflow

After making changes:

git status

Add changes:

git add .

Commit:

git commit -m "Describe your changes"

Push to GitHub:

git push origin main

⸻

🎯 Future Improvements

Possible future improvements include:

* Product search
* Product filtering
* Product reviews and ratings
* Wishlist
* Coupon system
* Pagination
* Better admin analytics
* Order cancellation
* Refund management
* Improved mobile UI
* Performance optimization
* Automated testing

⸻

👨‍💻 Author

Nirmal Kumar

MERN Stack Developer

🔗 Links

* 🌐 Live Project: https://shopnest-mern-zrgs.onrender.com/
* 💻 GitHub: https://github.com/NirmalKumar-1/ShopNest-MERN

⸻

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

⸻

📜 License

This project is created for educational and portfolio purposes.
