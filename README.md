# MithaiHub - Sweet Shop Management System

MithaiHub is a Full Stack Sweet Shop Management System built to streamline product management, customer ordering, packaging workflow, and order tracking.

The application provides separate workflows for Customers, Packaging Staff, and Administrators, making sweet shop operations simple and efficient.

---

## Features

### Customer Module

* Browse sweet products
* Search products instantly
* View product details
* Select weight options (250gm, 500gm, 1kg)
* Add products to cart
* Place orders
* Automatic token generation

### Packaging Staff Module

* Staff login
* View incoming orders
* Manage packing queue
* Update order status:

  * NEW
  * PACKING
  * READY
  * DELIVERED

### Admin Module

* Admin login
* Dashboard analytics
* Product management
* Add products
* Edit products
* Delete products
* View recent orders
* Order details modal
* Delete orders
* Revenue tracking
* Product count tracking
* Today's order statistics

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* shadcn/ui
* Lucide React
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* cors
* dotenv

---


## Product Features

Each sweet supports multiple weight options:

* 250gm
* 500gm
* 1kg

Pricing automatically updates based on selected weight and quantity.

---

## Order Workflow

Customer Places Order

↓

Token Generated

↓

Packaging Staff Receives Order

↓

NEW → PACKING → READY → DELIVERED

↓

Admin Can Monitor Complete Workflow

---

## Installation

### Frontend

npm install

npm run dev

### Backend

npm install

npm run dev

---

## Environment Variables

Create a .env file inside backend directory:

PORT=5000

MONGO_URI=your_mongodb_connection_string

---

## Future Improvements

* Image Upload Support
* Email Notifications
* Sales Reports
* Order Export
* Customer Accounts
* Inventory Management

---

## Author

Developed by Situn Pradhan

Full Stack Developer

Tech Stack:
React.js | Node.js | Express.js | MongoDB
