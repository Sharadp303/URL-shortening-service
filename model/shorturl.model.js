const mongoose=require("mongoose")

const shortUrlSchema= new mongoose.Schema({
    url:{
        type:String,
        unique:true
    },
    originalUrl:{
        type:String
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    }
})
module.exports=mongoose.model('shorturls',shortUrlSchema)