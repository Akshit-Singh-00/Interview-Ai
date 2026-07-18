const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'username already taken'],
        requird:true,
    },
    email:{
        type:String,
        unique:[true,'account already exist with this email address'],
        required:true,
    },
    password:{
        type:String,
        requird:true,
        
    }
})

const userModel= mongoose.model('user',userSchema)

module.exports = userModel