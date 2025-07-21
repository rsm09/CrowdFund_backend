const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
    amount: { type: Number, required: true },
    donatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
