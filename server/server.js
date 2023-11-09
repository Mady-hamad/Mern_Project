const express = require('express');
const app = express();
const port = 5000
const mongoose = require('mongoose');
const cors = require('cors')
const connect = require('./db')
require("dotenv").config();


const router = express.Router();

const userRouter = require('./routes/User')


app.use(express.json());
app.use(cors());

app.use(userRouter);
connect();






app.listen(port, ()=>{

    console.log(`Server is running on port ${port}`);

})


