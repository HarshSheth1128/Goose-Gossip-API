const knex = require('../../config/database');

module.exports.get_all_categories = () => {
    return knex('chat_categories')
        .select('*')  
}

module.exports.get_category_chats = (categoryID) => {
    return knex('chats')
        .join('chat_categories', 'chats.category_id', 'chat_categories.id')  
        .select('*')
        .where({ category_id: categoryID });
}

