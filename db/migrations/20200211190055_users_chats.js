
exports.up = (knex) => {
    return knex.schema.createTable('users_chats', (table) => {
        table.increments('id');
        table.integer('chat_id').unsigned().notNullable();
        table.foreign('chat_id').references('chats.id');
        table.string('user_id').notNullable();
        table.foreign('user_id').references('users.uuid');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users_chats');
};
