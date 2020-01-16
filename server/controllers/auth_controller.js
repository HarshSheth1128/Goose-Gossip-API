const UserModel = require('../models/Users');

module.exports.login = (req, res, next) => {

}

module.exports.register = (req, res, next) => {
    UserModel.addUser({ email: 'test', first_name: "Harsh", last_name: "Sheth" }).then(() => {
        res.send("Hello");
    })
}
