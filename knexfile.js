// Update with your config settings.

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'password',
            database: 'main'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/db/migrations`
        },
        seeds: {
            directory: `${__dirname}/db/seeds`
        },
        debug: true
    }
};
