//Get the router from express
const router = require('express').Router()

const {
    authenticate,
    register
} = require('../controllers/auth');

router.route('/authenticate').post(authenticate);

router.route('/register').post(register);

module.exports = router;