const knex = require('../../config/database')

module.exports.addUser = (user) => {
    return knex('users').insert(user);
}

module.exports.getUser = (user) => {
    return knex('users').select().where(user);
}


