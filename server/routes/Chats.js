const router = require('express').Router();

const {
    get_chat_for_user
} = require('../controllers/chats');

router.route('/chats/:id').get(get_chat_for_user);

module.exports = router;