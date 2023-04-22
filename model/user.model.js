const mongoose= require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    urls:{
        type:[mongoose.SchemaTypes.ObjectId]
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    },
    updatedAt:{
        type:Date,
        default:()=>{
            return Date.now()
        }
    }
    
})

module.exports= mongoose.model('users',userSchema)