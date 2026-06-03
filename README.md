# MithaiHub - Sweet Shop Management System

MithaiHub is a Full Stack Sweet Shop Management System built using React.js, Node.js, Express.js, and MongoDB Atlas.

The application streamlines sweet shop operations through dedicated modules for Customers, Packaging Staff, and Administrators.

---

# Features

## Customer Module

* Browse sweet products
* Search products instantly
* View product details
* Select weight options (250gm, 500gm, 1kg)
* Add products to cart
* Place orders
* Automatic token generation

---

## Packaging Staff Module

* Staff Login
* View incoming orders
* Manage packing queue
* Update order status

Order Status Flow:

NEW → PACKING → READY → DELIVERED

---

## Admin Module

* Admin Login
* Dashboard Analytics
* Product Management
* Add Products
* Edit Products
* Delete Products
* View Recent Orders
* View Order Details
* Delete Orders
* Revenue Tracking
* Product Statistics
* Today's Order Statistics

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* shadcn/ui
* Axios
* React Router DOM
* Lucide React

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS
* Dotenv

---

# Test Credentials

## Admin

Username: admin

Password: admin123

## Packaging Staff

Username: packing

Password: packing123

---

# Project Workflow

Customer Places Order

↓

Token Generated

↓

Order Saved In MongoDB

↓

Packaging Staff Receives Order

↓

NEW → PACKING → READY → DELIVERED

↓

Admin Monitors Complete Workflow

---

# Validation Steps

### Admin Flow

1. Login as Admin
2. Add Products
3. Edit Products
4. Delete Products
5. View Dashboard Statistics
6. Monitor Orders

### Customer Flow

1. Browse Products
2. Add Products To Cart
3. Place Order
4. Receive Token Number

### Packaging Flow

1. Login as Packaging Staff
2. View Incoming Orders
3. Update Status
4. Complete Order Workflow

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Situn07/Mithai_Hub.git
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

---



# Key Functionalities

* Product CRUD Operations
* Order Management System
* Token Generation System
* Packing Workflow Management
* Dashboard Analytics
* Revenue Tracking
* Role Based Access Control
* MongoDB Data Persistence

---

# Future Improvements

* JWT Authentication
* Password Encryption
* Customer Accounts
* Email Notifications
* Image Upload Support
* Sales Reports
* Inventory Management
* Export Reports

---

# Author

Situn Pradhan

Full Stack Developer

Tech Stack:

React.js | Node.js | Express.js | MongoDB Atlas
