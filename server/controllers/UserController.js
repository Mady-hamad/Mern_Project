const UserModel = require('../models/User');




const signIn = async (req,res)=>{
    try {
        console.log(req.body);

        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ email });

        if (user) {
            if (user.password === password) {
                res.json('Success');
            } else {
                res.json('The password is incorrect');
            }
        } else {
            res.json('Record doesnt exist');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal Server Error');
    }
}



const signUp = async (req,res)=>{
    try {
        console.log(req.body); // Add this line

        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.json(error);
    }




}



module.exports = {signUp, signIn }