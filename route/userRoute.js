const express = require('express');
const router = express.Router();
const {signup} = require('../controller/userController.js');

//router.post('/login',login);
//router.post('/login',yyyyY);
//router.post('/yyyy',yyyy);
//router.post('/yyyy',yyyy);
//router.post('/yyyy',yyyy);
router.post('/signup',signup);

module.exports = router;