const express = require('express');
const router = express.Router();
const user = require('./userRoute.js');

router.use('/user',user); 



module.exports = router;