//Get the router from express
const router = require('express').Router()

import {
    login,
    register
} from '../controllers/auth_controller';

router.route('/login').post(login);

router.route('/register').post(register);

module.exports = router;