const knex = require('../../config/database');

module.exports.get_messages_by_chat = (chat_id) => {
    return knex('messages')
        .select('*')
        .where({ sent_to: chat_id })
}

module.exports.add_message = (message) => {
    return knex('messages')
        .insert(message);
}