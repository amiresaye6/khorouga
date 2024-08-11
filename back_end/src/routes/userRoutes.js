const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getHelloWorld);
router.get('/users', userController.getUsers);
router.post('/login', userController.loginUser);
router.post('/signup', userController.signupUser);

module.exports = router;
