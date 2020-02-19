
exports.up = (knex) => {
    return knex.schema.createTable('chats', (table) => {
        table.increments('id');
        table.string('chat_name');
        table.string('type');
        table.string('icon_url');
        table.integer('category_id').unsigned().notNullable();
        table.foreign('category_id').references('chat_categories.id');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('chats');
};
