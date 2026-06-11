# MithaiHub - Sweet Shop Management System

MithaiHub is a Full Stack Sweet Shop Management System built using React, TypeScript, Node.js, Express.js, and MongoDB Atlas.

The application streamlines sweet shop operations through dedicated modules for Customers, Packaging Staff, and Administrators.

---

# Features

## Customer Module

* Browse sweet products
* Search products instantly
* View product details
* Select weight options (250gm, 500gm, 1kg)
* Add products to cart
* Manage cart using Zustand
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

* React 19
* TypeScript
* Vite
* Tailwind CSS v4
* shadcn/ui
* Zustand
* React Hook Form
* Zod
* Axios
* React Router DOM
* Lucide React

---

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS
* Dotenv

---

# Architecture

Frontend Structure

* Components
* Pages
* Hooks
* Store (Zustand)
* Services (Axios)
* Routes
* UI Components (shadcn)

Backend Structure

* Controllers
* Models
* Routes
* Middleware
* Database Configuration

---

# State Management

The application uses Zustand for global state management.

Features handled by Zustand:

* Cart Management
* Add To Cart
* Remove From Cart
* Clear Cart
* Calculate Total Amount

---

# Form Validation

The application uses:

* React Hook Form
* Zod Schema Validation

Implemented In:

* Login Form
* Add Product Form
* Edit Product Form

---

# Custom Hooks

Implemented reusable custom hooks:

* useProducts()
* useOrders()
* useDashboard()

Benefits:

* Reusable API Logic
* Cleaner Components
* Better Maintainability

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

## Admin Flow

1. Login as Admin
2. Add Product
3. Edit Product
4. Delete Product
5. Monitor Orders
6. Track Revenue

## Customer Flow

1. Browse Products
2. Search Products
3. Add Products To Cart
4. Place Order
5. Receive Token Number

## Packaging Flow

1. Login as Packaging Staff
2. View Incoming Orders
3. Start Packing
4. Mark Ready
5. Mark Delivered

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

Create a .env file inside backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# Key Functionalities

* Product CRUD Operations
* Order Management System
* Token Generation System
* Packing Workflow Management
* Dashboard Analytics
* Revenue Tracking
* Zustand State Management
* Form Validation Using Zod
* Role Based Access Control
* MongoDB Data Persistence
* TypeScript Type Safety

---

# Future Improvements

* JWT Authentication
* Password Encryption using bcrypt
* Refresh Token System
* Customer Accounts
* Email Notifications
* Image Upload Support (Cloudinary)
* Inventory Management
* Sales Reports
* Export Reports
* Payment Gateway Integration

---

# Author

Situn Pradhan

Full Stack Developer

Tech Stack:

React | TypeScript | Node.js | Express.js | MongoDB | Zustand | Zod | React Hook Form
