const knex = require('../../config/database');

module.exports.get_chat_for_user = (userID) => {
    return knex('users_chats')
        .join('chats', 'users_chats.chat_id', 'chats.id')
        .select('*')
        .where({ user_id: userID });
}