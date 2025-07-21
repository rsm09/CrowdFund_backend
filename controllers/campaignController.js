const Campaign = require('../models/Campaign');

const createCampaign = async (req, res) => {
    const { title, description, targetAmount, deadline, imageUrl, category } = req.body;

    const campaign = await Campaign.create({
        title, description, targetAmount, deadline, imageUrl, category,
        creator: req.user._id
    });

    res.status(201).json(campaign);
};

const getAllCampaigns = async (req, res) => {
    const campaigns = await Campaign.find().sort({ deadline: 1 }).populate('creator', 'name');
    res.json(campaigns);
};

const getCampaignById = async (req, res) => {
    const campaign = await Campaign.findById(req.params.id).populate('creator', 'name');
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });
        const isExpired = new Date(campaign.deadline) < new Date();
    const isGoalReached = campaign.raisedAmount >= campaign.targetAmount;

    res.json({
        ...campaign.toObject(),
        isExpired,
        isGoalReached
    });
};

const updateCampaign = async (req, res) => {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Not found' });

    if (campaign.creator.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    Object.assign(campaign, req.body);
    await campaign.save();
    res.json(campaign);
};

const deleteCampaign = async (req, res) => {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Not found' });

    if (campaign.creator.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

     await Campaign.findByIdAndDelete(req.params.id);
    res.json({ message: 'Campaign deleted' });
};

module.exports = {
    createCampaign, getAllCampaigns, getCampaignById, updateCampaign, deleteCampaign
};
