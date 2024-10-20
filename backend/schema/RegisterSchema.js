const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        length:11
    },
    gender:{
        type:String,
        required:true
    },
    data_of_birth:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("user",userSchema);