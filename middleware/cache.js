const redisClient=require('../redis.server')

async function redisCache(req,res,next){
    let key=req.body.url
    try{
    let check = await redisClient.get(key)

    if(check){
        console.log("response from cache")
      
        //Check keys store in REDIS
        // const keys= await redisClient.KEYS("*")
        //   console.log(keys)

        //FLUSH ALL KEYS
        // const flushKey= await redisClient.FLUSHALL()
        // console.log(flushKey)
        
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

