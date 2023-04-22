const users=require("../model/user.model")
const bcrypt =require('bcrypt')
const jwt= require('jsonwebtoken')
require('dotenv').config()

async function signUp(req,res){
   try{
        const  {name,email,password}= req.body;

        const result= await users.create({name:name,
                                         email:email,
                                         password:bcrypt.hashSync(password,8)})
        res.status(201).json({message:"Signed Up successFully"})
    }
   catch(err){
        console.log(err)
        res.status(500).json({msg : 'Internal Server error'})
    }
}


async function signIn(req,res){
    try{
        const {email,password}=req.body;
        const user= await users.findOne({email:email})
        if(user){
            validpass = bcrypt.compareSync(password,user.password);
            if(validpass){
                const token =await jwt.sign({id:user._id},process.env.SECRETKEY,{expiresIn:'1h'})
                res.status(200).json({token:token})
            }
            else{
                res.status(400).json({msg:"Invalid email or password"})
                return
            }
        }else{
            res.status(400).json({msg:"Invalid email or password"})
        }

    }
    catch(err){
        console.log(err)
        res.status(500).send({msg : 'Internal Server error'})
    }

}

module.exports={signUp,signIn}