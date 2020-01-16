const knex = require('../../config/database')

module.exports.addUser = (user) => {
    return knex('users').insert(user);
}

