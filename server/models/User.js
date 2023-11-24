const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Your User Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Your Email is Required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Your Password is required'],
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },
})


UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });


const UserModel = mongoose.model("users",UserSchema)



module.exports = UserModel
