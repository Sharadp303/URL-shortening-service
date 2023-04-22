const redisClient=require('../redis.server')

async function redisCache(req,res,next){
    let key=req.body.url
    try{
    let check = await redisClient.get(key)

    if(check){
        console.log("response from cache")
        res.status(200).json(`localhost:5555/${check}`)
        return;
    }
    else{
        next()
    }
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg : 'Internal Server error'})
    }
}
module.exports={redisCache}

