const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

const { register, login } = userController;

router.post('/register', register);
router.post('/login', login);

module.exports = router;