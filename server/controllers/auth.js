const UserModel = require('../models/Users');
const uuidv1 = require('uuid/v1');
const jwt = require('jsonwebtoken');
const secret = require('../../config/auth');

module.exports.authenticate = (req, res, next) => {
    if ('username' in req.body) {
        // Check the db to see if the password and username is good
        let { username, password } = req.body;
        UserModel.getUser({ username }).then((user) => {
            if (user.length == 0) {
                res.status(404).send({ message: 'Invalid username/password' });
            } else {
                user = user[0];
                if (Buffer.from(password).toString('base64') === user.password) {
                    res.status(200).send({ username: user.username, id: user.uuid });
                } else {
                    res.status(400).send({ message: "Invalid username/password" });
                }
            }
        });
    } else {
        // Add the guest user to the db and authenticate them
        let uuid = uuidv1(),
            username = `Guest_${uuid}`;

        UserModel.addUser({ uuid, username }).then(() => {
            const token = jwt.sign({ username }, secret);
            res.status(200).set("Bearer", token).send({ username });
        }).catch(() => {
            res.status(400).send({ message: "failed to create guest user" });
        });
    }

}

module.exports.register = (req, res, next) => {
    //Encrypt the password and add user

    let { email, username, password } = req.body;

    UserModel.getUser({ email }).then((users) => {
        if (users.length == 0) {
            let uuid = uuidv1();

            UserModel.addUser({ uuid, ...req.body, password: Buffer.from(password).toString('base64') }).then(() => {
                const token = jwt.sign({ username }, secret);
                // According to drupal security best practices, exposing userid is not considered a security flaw
                res.status(200).set("Bearer", token).send({ username, uuid });
            });
        } else {
            res.status(400).send({ message: 'User with that email exists' });
        }
    });


}
