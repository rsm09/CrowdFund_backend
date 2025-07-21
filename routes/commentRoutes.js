const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const {addComment, getCommentsByCampaign, deleteComment} = require('../controllers/commentController');

router.post('/:campaignId', protect, addComment);
router.get('/:campaignId', getCommentsByCampaign);
router.delete('/:commentId', protect, deleteComment);

module.exports = router;
