const Donation = require('../models/Donation');
const Campaign = require('../models/Campaign');
const User = require('../models/User');
const sendThankYouEmail = require('../utils/sendEmail');

const donateToCampaign = async (req, res) => {
    const { amount } = req.body;
    const campaign = await Campaign.findById(req.params.campaignId).populate('creator', 'name email');

    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    campaign.raisedAmount += amount;
    await campaign.save();

    const donation = await Donation.create({
        user: req.user._id,
        campaign: campaign._id,
        amount
    });

    const donor = await User.findById(req.user._id);
    await sendThankYouEmail(donor.email, campaign.creator.name, campaign.title);
    
    res.status(201).json(donation);
};

const getDonationStats = async (req, res) => {
    try {
        const campaignId = req.params.campaignId;

        const donations = await Donation.find({ campaign: campaignId });

        const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
        const totalDonors = donations.length;
        const averageDonation = totalDonors > 0 ? (totalAmount / totalDonors).toFixed(2) : 0;

        res.json({
            totalAmount,
            totalDonors,
            averageDonation
        });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching donation stats' });
    }
};

module.exports = { donateToCampaign,getDonationStats };
