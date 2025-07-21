const Campaign = require('../models/Campaign');
const Donation = require('../models/Donation');

const getUserProfile = async (req, res) => {
    try {
        const campaigns = await Campaign.find({ creator: req.user._id });
        const donations = await Donation.find({ user: req.user._id }).populate('campaign', 'title');

        res.json({
            user: req.user,
            campaigns,
            donations,
        });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getUserProfile };
