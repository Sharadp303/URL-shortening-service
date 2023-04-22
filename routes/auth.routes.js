const { signUp, signIn } = require("../controller/auth")

module.exports=function(app){
    app.post('/user/signin',signIn)
    app.post('/user/signup',signUp)
}