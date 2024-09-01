const express = require('express');
const { userRegister, userLogin, getCurrentUser, getUsers, deleteUser, updateUser, uploadAvatar } = require('../controllers/user.controller');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
// IMPORT CONTROLLERS.

router.post('/register', userRegister);

router.post('/upload-avatar/:id', upload.single('avatar'), uploadAvatar);

router.post('/login', userLogin);
// test end point for debguing onley
router.get('/users', getUsers);
// private endpoint for only loogedin users
router.get('/current', validateToken, getCurrentUser);

router.put('/update/:id', validateToken, updateUser);

router.delete('/delete/:id', validateToken, deleteUser);

module.exports = router
