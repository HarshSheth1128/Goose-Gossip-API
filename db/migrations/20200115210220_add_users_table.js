
exports.up = (knex) => {
    return knex.schema
        .createTable('users', function (table) {
            table.string('uuid').notNullable().unique();
            table.string('email', 255).unique();
            table.string('username', 255).notNullable();
            table.string('password', 255).notNullable();

        })
};

exports.down = (knex) => {
    return knex.schema
        .dropTable("users");
};
