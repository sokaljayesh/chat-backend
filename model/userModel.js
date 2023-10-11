const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
    username : {type : String, required : true, unique : [true,'username already used']},
    email : {type : String, required : true, unique : [true,'email is already registered']},
    number : {type : String, required : true, max : [10,'invalid number'],min : [10,'invalid number'], unique : [true,'number already registered']},
    password : {type : String, required: true}
});

module.exports = mongoose.model('User',userSchema);