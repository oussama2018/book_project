const express=require('express')
const app = express() 
const dotenv=require('dotenv')
const connectDB=require('./config/connectDB')
dotenv.config(path="./.env")
const port=process.env.PORT ||8081
connectDB()
app.use(express.json())
app.use('/api',require('./routes/userRoutes'))
app.listen(port,(err)=>err?console.log(err):console.log('Server is runnig correctly on port :', port))

