const {User} = require("../model/User")
const express = require("express");
const bcrypt = require("bcrypt");
const { errorHandle } = require("../utils/errorHandler");
const { OTP } = require("../model/OTP");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.signUp = async (req, res, next) => {

  try {
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      accountType,
      otp,
    } = req.body;


    if (!email || !password || !confirmPassword || !firstName || !lastName){
      return next(errorHandle("403", "All Field are required"));
    }

    if(!otp){
      return next(errorHandle("403" , "Please enter the otp"))
    }

    if(password !== confirmPassword){
      return next(errorHandle("400" , "Password doesn't match"));
    }

    const existingEmail = await User.findOne({email});

    if(existingEmail){
      return next(errorHandle("409" , "User Already exists"));
    }

    const findCurrentotp = await OTP.findOne({email}).sort({createdAt : -1});

    if(findCurrentotp.otp !== otp){
      return next(errorHandle("400" , "Invalid Otp"));
    }

    let hashedPassword ;

    hashedPassword = await bcrypt.hash(password , 10);

    const user = new User({
      email,
      password:hashedPassword,
      firstName,
      lastName,
      accountType,
      imageUrl:`https://api.dicebear.com/7.x/initials/svg?seed=[${firstName}][${lastName}]`
    });
    
    await user.save();

    return res.status(201).json({
        success: true,
        message:"SignUp successfull",
        user
    })


  }catch (error) {

    return next(error);

  }

};

exports.login = async(req , res , next) => {

  try{

    const {email ,password} = req.body;
    // console.table([email , password])

    if(!email || !password){
      return next(errorHandle("400" , "All field are required"));
    }

    const existingUser = await User.findOne({email});

    

    if(!existingUser){
      return next(errorHandle("404" , "User doesn't exists"));
    }

    const hashedPassword = existingUser.password;

    if(!bcrypt.compareSync(password , hashedPassword)){
      // console.log("USER : " , existingUser);
      return next(errorHandle("400" , "Invalid Password"))
    }

    const {password:pass , ...userInfo} = existingUser._doc;

    const payload = {
      email:email ,
      id :existingUser._id,
      accountType:existingUser.accountType
    }

    const token = jwt.sign(payload , process.env.JWT_SECRET , {
      expiresIn:"2h",
    });


    const options = {
      expire:new Date(Date.now()/1000 + 24*60*60*60)
    }
    
    return res.cookie("token" , token , options).status(200).json({
      success: true,
      message: "Login SuccessFull",
      userInfo,
      token
    })

  }catch(error){
    return next(error);
  }

}


exports.sendOtp = async(req , res , next) => {

  try{

    const {email} = req.body;

    const existingUser = await User.findOne({email});

    if(existingUser){
      return next(errorHandle("409" , "User Already exists"));
    }

    const length = 6

    const uniqueString = `${email}-${Date.now()}`;

    // Generate a SHA-256 hash of the unique string
    const hash = crypto.createHash('sha256').update(uniqueString).digest('hex');

    // Convert the hash to a numeric OTP and truncate to the desired length
    const otp = parseInt(hash.slice(0, length), 16).toString().slice(0, length);

    const data = new OTP({otp , email});

    await data.save();

    return res.status(200).json({
      success:true,
      message: "Otp sent succesfully",
    })


  }catch(error){

    return next(error);

  }

}


exports.changePassword = async(req , res , next) => {

    try{

      const id = req.id;
      const {oldPassword , newPassword} = req.body;

      if(!oldPassword || !newPassword){
        return next(errorHandle("400" , "All Fields are required"));
      }

      const user = await User.findById(id);

      if(!user){
        return next("404" , "something went wrong please try after some time");
      }

      const matched =  bcrypt.compareSync(oldPassword , user.password);

      if(matched){

        const hashedPassword = bcrypt.hashSync(newPassword , 10);
        user.password = hashedPassword;

        const updatedUser = await User.findByIdAndUpdate({
          _id:id,
          password:hashedPassword,
        })

        const {password:pass , ...userInfo} = updatedUser._doc;

        return res.status(200).json({
          success:true,
          userInfo,
          message:"Password Update Successfull"
        })
      }

      return next(errorHandle("402" , "Invalid Password"))



    }catch(error){
      return next(error)
    }

}


// exports.resetPasswordOTP = async(req , res , next) =>{

//   try{

//     const {email , otp} = req.body;

//     const currentOtp = await OTP.findOne({email : email}).sort({createdAt:-1});

//     if(currentOtp != otp){

//       return next(errorHandle("400" , "Invalid Otp"));

//     }

//     next();
    

//   }catch(error){
//     return next(error)
//   }

// }

// exports.resetPassword = async(req , res ,  next) => {

//   try{

//     const {newPassword}

//   }catch(error){

//   }

// }
