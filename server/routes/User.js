const express = require('express');
const router = express.Router();

const {signIn,signUp} = require('../controllers/UserController')
const UserModel = require('../models/User');


router.post('/api/login', signIn);
router.post('/api/register' , signUp);


module.exports = router;