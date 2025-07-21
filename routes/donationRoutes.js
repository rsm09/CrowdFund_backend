const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { donateToCampaign, getDonationStats } = require('../controllers/donationController');

router.post('/:campaignId', protect, donateToCampaign);
router.get('/stats/:campaignId', getDonationStats);

module.exports = router;
