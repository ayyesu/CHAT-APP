const express = require('express');
const {
    registerUser,
    loginUser,
    findUser,
    getUsers,
} = require('../Controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/find/:firstId/:secondId', findUser);
router.get('/', getUsers);

module.exports = router;
