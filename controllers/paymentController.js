// controllers/paymentController.js
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

const createOrder = async (req, res) => {
    const { amount, currency = "INR" } = req.body;

    const options = {
        amount: amount * 100, // convert to paisa
        currency,
        receipt: `receipt_order_${Date.now()}`
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create Razorpay order' });
    }
};

module.exports = { createOrder };
