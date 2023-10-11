const express = require('express');
const app = express();
const mongoose = require('mongoose');
const index = require('./route/indexRoute.js');
const cors = require('cors');
const config = require('./config.js');

mongoose.connect(config.url);

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json data
app.use(express.json());

// cross origin
app.use(cors());

//const User = require('./model/userModel.js');


app.get('/',(req,res)=>{
    res.send('hello node')
})

app.use('/',index);

app.listen(config.port,()=>{
    console.log("Server is running on port 5000");
})