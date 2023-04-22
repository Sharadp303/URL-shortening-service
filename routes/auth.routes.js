const { signUp, signIn, signOut } = require("../controller/auth")
const { verifyToken } = require("../middleware/user")

module.exports=function(app){
    app.post('/user/signin',signIn)
    app.post('/user/signup',signUp)
    app.post('/user/signout',[verifyToken],signOut)
}