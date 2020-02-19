const router = require('express').Router();

const {
    get_chat_for_user,
    get_all_chats,
    get_chat_members
} = require('../controllers/chats');

router.route('/chats/:user_id').get(get_chat_for_user);

router.route('/chats').get(get_all_chats);

router.route('/chats/members/:chat_id').get(get_chat_members);

module.exports = router;