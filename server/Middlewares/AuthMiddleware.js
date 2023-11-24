const User = require('../models/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies['token'];

    if (!token) {
      return res.json({ status: false, message: 'Token not found' });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false, message: 'Invalid token' });
      } else {
        const user = await User.findById(data.id);

        if (user) {
          return res.json({ status: true, user: user.username });
        } else {
          return res.json({ status: false, message: 'User not found' });
        }
      }
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Server error' });
  }
};
