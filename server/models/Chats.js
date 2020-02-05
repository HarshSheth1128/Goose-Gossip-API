const knex = require('../../config/database');

module.exports.get_chat_for_user = (userID) => {
    return knex('messages')
        .join('chats', 'messages.sent_to', '=', 'chats.id')
        .select('*')
        .where({ sent_by: userID });
}