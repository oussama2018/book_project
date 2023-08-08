const User =require('../models/userSchema')
const bcrypt = require('bcrypt');
const register=async(req,res)=>{
try {
    const{name,lastname,password,email,age}=req.body
    const existuser=await User.findOne({email:email})
    if(existuser){
        res.status(400).json({msg:"this email already exist"})
    }
    else{
        const hashPW=await bcrypt.hash(password,10)
        const user
    }
} catch (error) {
    res.status(500).json({msg:"something get wrong",err:error})
}
}
module.exports={register}