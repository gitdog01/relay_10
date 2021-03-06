const express = require('express');
const controller = require('./auth.controllers');
const router = express.Router();

router.post('/login', controller.login);
router.post('/logout', controller.logout);
router.post('/register', controller.addUser);

module.exports = router;