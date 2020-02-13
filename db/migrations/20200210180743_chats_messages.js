exports.up = (knex) => {
    return knex.schema.createTable('chats_messages', (table) => {
        table.increments('id');
        table.integer('chat_id').unsigned().notNullable();
        table.foreign('chat_id').references('chats.id');
        table.integer('messages_id').unsigned().notNullable();
        table.foreign('messages_id').references('messages.id');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('chats_messages');
};
