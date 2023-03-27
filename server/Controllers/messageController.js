const messageModel = require('../Models/messageModel');

const createMessage = async (req, res) => {
    const {chatId, senderId, text} = req.body;
    try {
        const message = new messageModel({chatId, senderId, text});
        const response = await message.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};
