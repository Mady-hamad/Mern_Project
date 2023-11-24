const express = require('express');
const router = express.Router();

const {signIn,signUp} = require('../controllers/UserController')
const UserModel = require('../models/User');
const { userVerification } = require('../Middlewares/AuthMiddleware');


router.post('/api/login', signIn);
router.post('/api/register' , signUp);
router.post('/api/', userVerification)


module.exports = router;