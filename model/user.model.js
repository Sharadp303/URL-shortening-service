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
    },
    password:{
        type:String,
        required:true
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