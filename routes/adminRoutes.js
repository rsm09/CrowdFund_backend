const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require('../middlewares/authMiddleware');
const {
    deleteUser, getAllUsers,getAllCampaigns, adminDeleteCampaign, adminDeleteComment
} = require('../controllers/adminController');

router.delete('/user/:userId', protect, isAdmin, deleteUser);
router.get('/users', protect, isAdmin, getAllUsers);
router.get('/campaigns', protect, isAdmin, getAllCampaigns);
router.delete('/campaign/:campaignId', protect, isAdmin, adminDeleteCampaign);
router.delete('/comment/:commentId', protect, isAdmin, adminDeleteComment);

module.exports = router;
