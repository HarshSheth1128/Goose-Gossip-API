const CategoryModel = require('../models/Categories');

module.exports.get_all_categories = (req, res, next) => {
    CategoryModel.get_all_categories().then((categories) => {
        res.status(200).send(categories);
    }).catch(() => {
        res.status(400).send({ message: "Failed to get user chats" });
    });
}

module.exports.get_category_chats = (req, res, next) => {
    CategoryModel.get_category_chats(req.params.id).then((categories) => {
        res.status(200).send(categories);
    }).catch((e) => {
        res.status(400).send({ message: "Failed to get category chats" });
    });
}
