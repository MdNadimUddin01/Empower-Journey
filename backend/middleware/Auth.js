const { User } = require("../model/User");
const { errorHandle } = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = async(req , res , next) => {

    try{

        const {token} = req.body;

        if(!token){
            return next(errorHandle("403" , "Token missing"));
        }

        const decode = jwt.verify(token , process.env.JWT_SECRET);

        req.id = decode.id;

        next();


    }catch(error){
        return next(error);
    }

}


exports.isStudent = async(req , res ,next) => {

    try{

        const id = req.id;

        const user = await User.findById(id);

        if(!user){
            return next(errorHandle("404" , "Not found"));
        }

        console.log(user);

        if(user.accountType !== "Student"){

            return res.status(401).json({
                success:false,
                message:"Protected Route For Student"
            })

        }

        next();


    }catch(error){
        return next(error);
    }
}

exports.isInstructor = async(req , res , next) => {

    try{

        const id = req.id;

        const user = await User.findById(id);

        if(!user){
            return next(errorHandle("404" , "Not found"));
        }

        if(user.accountType !== "Instructor"){

            return res.status(401).json({
                success:false,
                message:"Protected Route For Instructor"
            })

        }

        next();




    }catch(error){
        return next(error);
    }
    
}

exports.isAdmin = async(req , res , next) => {

    try{

        const id = req.id;

        const user = await User.findById(id);

        if(!user){
            return next(errorHandle("404" , "Not found"));
        }

        if(user.accountType === "Admin"){

            return res.status(401).json({
                success:false,
                message:"Protected Route For Admin"
            })
            
        }

        next();


    }catch(error){
        return next(error);
    }

}