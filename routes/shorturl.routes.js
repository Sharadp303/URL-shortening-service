const { shortUrl, searchurl } = require("../controller/shorturl")
const { verifyToken } = require("../middleware/user")

module.exports=function(app){
    app.get('/:shortID',searchurl)
    app.post('/shorturl',[verifyToken],shortUrl)
}