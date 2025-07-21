// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { createOrder } = require('../controllers/paymentController');

router.post('/order', protect, createOrder);

module.exports = router;
