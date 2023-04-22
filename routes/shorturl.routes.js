const { shortUrl, searchurl } = require("../controller/shorturl")
const { redisCache } = require("../middleware/cache")
const { verifyToken } = require("../middleware/user")

module.exports=function(app){
    app.get('/:shortID',searchurl)
    app.post('/shorturl',[verifyToken,redisCache],shortUrl)
}