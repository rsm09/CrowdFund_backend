const User = require('../models/User');
const Campaign = require('../models/Campaign');
const Comment = require('../models/Comment');
const Donation = require('../models/Donation');

const deleteUser = async (req, res) => {
    const userId = req.params.userId;

    await Campaign.deleteMany({ creator: userId });
    await Comment.deleteMany({ user: userId });
    await Donation.deleteMany({ user: userId });
    await User.findByIdAndDelete(userId);

    res.json({ message: 'User and associated data deleted' });
};

const getAllUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
};

const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().populate('creator', 'name email');
        res.json(campaigns);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch campaigns' });
    }
};

const adminDeleteCampaign = async (req, res) => {
    await Campaign.findByIdAndDelete(req.params.campaignId);
    res.json({ message: 'Campaign deleted by admin' });
};

const adminDeleteComment = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.json({ message: 'Comment deleted by admin' });
};

module.exports = { 
    deleteUser, 
    getAllUsers, 
    getAllCampaigns, 
    adminDeleteCampaign, 
    adminDeleteComment 
};
