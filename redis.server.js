const redis=require('redis')
require('dotenv').config()

 const redisClient = redis.createClient({
    password:process.env.REDISKEY,
    socket: {
        host: 'redis-18475.c264.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 18475
            }
        });
     
  redisClient.on("connect", () => {
    console.log('✅connect redis success !')
   })

  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  
  redisClient.connect();

module.exports=redisClient;