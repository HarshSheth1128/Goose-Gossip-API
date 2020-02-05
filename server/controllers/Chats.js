const ChatModel = require('../models/Chats');

module.exports.get_chat_for_user = (req, res, next) => {
    ChatModel.get_chat_for_user(req.params.id).then((chats) => {
        res.status(200).send(chats);
    }).catch(() => {
        res.status(400).send({ message: "Failed to get chats" });
    });
}