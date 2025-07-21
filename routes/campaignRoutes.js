const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {
    createCampaign, getAllCampaigns, getCampaignById, updateCampaign, deleteCampaign
} = require('../controllers/campaignController');

router.get('/', getAllCampaigns);
router.post('/', protect, createCampaign);
router.get('/:id', getCampaignById);
router.put('/:id',protect, updateCampaign);
router.delete('/:id', protect, deleteCampaign);

module.exports = router;
