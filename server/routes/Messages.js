const router = require('express').Router();

const {
    get_messages_by_chat,
    add_message
} = require('../controllers/Messages');

router.route('/messages/:id').get(get_messages_by_chat);

router.route('/messages').post(add_message);

module.exports = router;