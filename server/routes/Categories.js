const router = require('express').Router();

const {
    get_all_categories,
    get_category_chats
} = require('../controllers/categories');

router.route('/categories').get(get_all_categories);
router.route('/categories/:id').get(get_category_chats);

module.exports = router;