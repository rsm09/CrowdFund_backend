const Comment = require('../models/Comment');

const addComment = async (req, res) => {
    const comment = await Comment.create({
        user: req.user._id,
        campaign: req.params.campaignId,
        text: req.body.text,
    });
    res.status(201).json(comment);
};

const getCommentsByCampaign = async (req, res) => {
    const comments = await Comment.find({ campaign: req.params.campaignId }).populate('user', 'name');
    res.json(comments);
};

const deleteComment = async (req, res) => {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Not found' });

    if (comment.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    await comment.remove();
    res.json({ message: 'Comment deleted' });
};

module.exports = { addComment, getCommentsByCampaign, deleteComment };
