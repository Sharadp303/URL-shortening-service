const express=require("express")
const mongoose=require("mongoose")
const {dbconfig}=require('./config/db.config')

require('dotenv').config()
const PORT=process.env.PORT||3000;

const app= express()

app.use(express.json())

require('./routes/auth.routes')(app)
require('./routes/shorturl.routes')(app)

mongoose.connect(dbconfig).then(()=>{console.log('CONNECTED  TO DB')}).catch(console.log())


app.listen(PORT,()=>{
    console.log(`Server running on localhost:${PORT}`)
})

