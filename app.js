const express=require("express")
const mongoose=require("mongoose")
const {dbconfig}=require('./config/db.config')

require('dotenv').config()

const app= express()

app.use(express.json())

require('./routes/auth.routes')(app)
require('./routes/shorturl.routes')(app)

mongoose.connect(dbconfig).then(()=>{console.log('CONNECTED  TO DB')}).catch(console.log())


app.listen(process.env.PORT,()=>{
    console.log(`Server running on localhost:${process.env.PORT}`)
})

