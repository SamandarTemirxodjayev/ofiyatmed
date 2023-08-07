const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);
router.post('/', userController.indexPost);
router.get('/about', userController.about);
router.get('/contact', userController.contact);

module.exports = router;