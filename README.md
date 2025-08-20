# 📦 KindleFund Backend

KindleFund is a full-stack crowdfunding platform built using the **MERN stack**.  
This repository contains the **backend (API)** code, developed with **Node.js**, **Express.js**, and **MongoDB** following the **MVC architecture**.

---

## 🚀 Features

- 🛠️ **RESTful APIs** for campaigns, users, donations, and comments
- 🔐 **JWT authentication & authorization**
- 💳 **Razorpay payment gateway** integration
- 📧 **Nodemailer** email notifications (thank-you emails to donors)
- 📂 **MVC architecture** for clean and scalable code

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT**
- **Razorpay**
- **Nodemailer**

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/kindlefund-backend.git

# Navigate to backend folder
cd kindlefund-backend

# Install dependencies
npm install

# Create .env file and configure variables
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
RAZORPAY_KEY=your-razorpay-key
RAZORPAY_SECRET=your-razorpay-secret
EMAIL_USER=your-email
EMAIL_PASS=your-app-password

# Run development server
npm run dev


## 📡 API Routes (Sample)

- **Auth** → `/api/auth/register`, `/api/auth/login`  
- **Campaigns** → `/api/campaigns` (CRUD + filtering + expiry logic)  
- **Donations** → `/api/donations/:campaignId`  
- **Comments** → `/api/comments/:campaignId`  
- **Admin** → `/api/admin/deleteUser/:id`  

---

## 📧 Contact

For queries or collaboration:  
**Rohit Magar** – [LinkedIn](https://www.linkedin.com/in/rohitsunilmagar/) | [Portfolio](https://glittery-kringle-2803b6.netlify.app/)  
