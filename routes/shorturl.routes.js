const { shortUrl, searchurl } = require("../controller/shorturl")
const { redisCache } = require("../middleware/cache")
const { limiter } = require("../middleware/ratelimit")

const { verifyToken } = require("../middleware/user")

module.exports=function(app){
    app.get('/:shortID',searchurl)
    app.post('/shorturl',[verifyToken,limiter,redisCache],shortUrl)
}