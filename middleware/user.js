require('dotenv').config()
const jwt=require('jsonwebtoken')
async function verifyToken(req,res,next){
    const token=req.headers['access-token']
    try{
        if(token){
            const verify= jwt.verify(token,process.env.SECRETKEY)
            if(verify){
                req.userID=verify.id;
                next()
            }
        }
        else{
            res.status(400).json({msg:"Bad request token missing or expired"})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg : 'Internal Server error'})
    }
}

module.exports={verifyToken}