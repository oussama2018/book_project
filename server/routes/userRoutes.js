const express=require('express')
const router=express.Router()
const {register}=require('../controllers/userControllers')
router.post('/register',(req,res)=>{res.send("hello")})

module.exports=router
