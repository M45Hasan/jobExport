const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const User=require("../model/userModel")
const emailV=require("../utils/emailVerfy")
const {generateAndCopyOTP}=require("../utils/otpGenerate")


const regiController =async(req,res)=>{
  
    const {name,pass,avatar,role,email,phone}=req.body
    const otp=generateAndCopyOTP()
         console.log(req.body)
    bcrypt.hash(pass, 5, function (err, hash) {
        let mongo = new User({
          name,
          email,
          pass: hash,
          avatar: avatar,
          role,
          phone,
          otpmatch:otp
        });
        mongo.save();
      emailV(email,otp,"Email verify")
        res.send(mongo);
      });
}

const verifyEmailController=async(req,res)=>{
  const{email,otpmatch}=req.body

  try {
    const search = await User.find({ email: email, otpmatch: otpmatch });
    if(search.length>0){
      await User.findOneAndUpdate(
        { email: email },
        { $set: { hasEmailVerified: true ,otpmatch:""} },
        { new: true }
      );
    }
    res.status(200).json(search); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}




module.exports={
    regiController,
    verifyEmailController,

}