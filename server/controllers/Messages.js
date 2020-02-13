const MessageModel = require('../models/Messages');

module.exports.get_messages_by_chat = (req, res, next) => {
    MessageModel.get_messages_by_chat(req.params.id).then((messages) => {
        res.status(200).send(messages);
    }).catch((err) => {
        res.status(400).send({ message: "Failed to get messages" });
    });
}

module.exports.add_message = (req, res, next) => {
    MessageModel.add_message(req.body).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.status(400).send();
    });
}