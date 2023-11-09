const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB, { useNewUrlParser: true });
    console.log("Db connected")
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connect