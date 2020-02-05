
exports.up = (knex) => {
    return knex.schema.createTable('chats', (table) => {
        table.increments('id');
        table.string('chat_name');
        table.string('type');
        table.string('icon_url');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('chats');
};
