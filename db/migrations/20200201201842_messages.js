exports.up = (knex) => {
    return knex.schema.createTable('messages', (table) => {
        table.increments('id');
        table.string('sent_by').notNullable();
        table.foreign('sent_by').references('users.uuid');
        table.integer('sent_to').unsigned().notNullable();
        table.foreign('sent_to').references('chats.id');
        table.string('content');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('messages');
};
