const express = require('express');
const { userRegister, userLogin, getCurrentUser, getUsers } = require('../controllers/user.controller');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();
// IMPORT CONTROLLERS.

router.post('/register', userRegister);
router.post('/login', userLogin);
// test end point for debguing onley
router.get('/users', getUsers);
// private endpoint for only loogedin users
router.get('/current', validateToken, getCurrentUser);

module.exports = router