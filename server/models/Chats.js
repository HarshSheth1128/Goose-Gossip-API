const knex = require('../../config/database');

module.exports.get_chat_for_user = (userID) => {
    return knex('users_chats')
        .join('chats', 'users_chats.chat_id', 'chats.id')
        .select('*')
        .where({ user_id: userID });
}

module.exports.get_all_chats = (id) => {
    return knex('chats')
        .select('*')  
}

module.exports.get_chat_members = (chatID) => {
    return getUsers = knex('users_chats')
        .join('users', 'users_chats.user_id', 'users.uuid')
        .select('*')
        .where({ chat_id: chatID });
}

