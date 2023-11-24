const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createSecretToken } = require('../util/SecretToken');
var cookieParser = require('cookie-parser')



const signUp = async (req, res, next) => {
  try {
    console.log(req.body); // Log the received request body for debugging

    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await UserModel.create({ username, email, password });
    // const token = createSecretToken(user._id);

    // res.cookie('token', token, {
    //   withCredentials: true,
    //   httpOnly: false,
    // });

    console.log(`token ===> ${token}`);
    
    // Respond with status 201 and both the success message and the user details
    res.status(201).json({ message: 'User signed in successfully', success: true, user });
  } catch (error) {
    console.error(error);
    // Handle errors appropriately - here, just responding with a generic error message
    res.status(500).json({ message: 'An error occurred while processing your request' });
  }
};

const signIn = async (req,res,next)=>{
    try {
        console.log(`credentials: ==>>`,req.body);

        const { email, password } = req.body;

        if(!email || !password){
            return res.json({message: 'All fields are required'})
        }
        const user = await UserModel.findOne({email})
        if(!user){
            return res.json({message:'Incorrect email' }) 
        }

        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
          return res.json({message:'Incorrect password' }) 
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true , token });
        next()
     } catch (error) {
       console.error(error);
     }

        
    

}







module.exports = {signUp, signIn }