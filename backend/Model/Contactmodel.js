const mongoose = require('mongoose')
const contactschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    
    query:{
        type:String,
        
    }
    
},{timestamps:true})
module.exports=mongoose.model('Contact',contactschema)