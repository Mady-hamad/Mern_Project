const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const connect = require('./db');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/User');

app.use(cors({
  origin: 'http://localhost:3000', // Update with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    // Other headers and configurations
    next();
  });
  

  

app.use(express.json());
app.use(cookieParser());
app.use(userRouter);

connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
