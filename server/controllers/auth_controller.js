const UserModel = require('../models/Users');

module.exports.authenticate = (req, res, next) => {
    //Check the db to see if the password and username is good
    let { username, password } = req.body;
    // console.log(username, password);
    UserModel.getUser({ username }).then((user) => {
        if (user.length == 0) {
            res.status(404).send({ message: 'Invalid username/password' });
        } else {
            user = user[0];
            if (Buffer.from(password).toString('base64') === user.password) {
                res.sendStatus(200);
            } else {
                res.status(400).send({ message: "Invalid username/password" });
            }
        }
    });
}

module.exports.register = (req, res, next) => {
    //Encrypt the password and add user

    let { email, username, password } = req.body;

    UserModel.getUser({ email }).then((users) => {
        if (users.length == 0) {
            UserModel.addUser({ ...req.body, password: Buffer.from(req.body.password).toString('base64') }).then(() => {
                res.sendStatus(200);
            });
        } else {
            res.status(400).send({ message: 'User with that email exists' });
        }
    });


}
