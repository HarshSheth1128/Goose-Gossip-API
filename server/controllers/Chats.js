const ChatModel = require('../models/Chats');

module.exports.get_chat_for_user = (req, res, next) => {
    ChatModel.get_chat_for_user(req.params.user_id).then((chats) => {
        res.status(200).send(chats);
    }).catch(() => {
        res.status(400).send({ message: "Failed to get user chats" });
    });
}

module.exports.get_all_chats = (req, res, next) => {
    ChatModel.get_all_chats().then((chats) => {
        res.status(200).send(chats);
    }).catch(() => {
        res.status(400).send({ message: "Failed to get all chats" });
    });
}

module.exports.get_chat_members = (req, res, next) => {
    ChatModel.get_chat_members(req.params.chat_id).then((chats) => {
        res.status(200).send(chats);
    }).catch(() => {
        res.status(400).send({ message: "Failed to get all chats" });
    });
}