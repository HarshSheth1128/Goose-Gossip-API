
exports.up = function(knex) {
    return knex.schema.createTable('chat_categories', (table) => {
        table.increments('id');
        table.string('category_name');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('chat_categories');
};
