const mongoose = require("mongoose");
const { sendMail } = require("../utils/nodemailer");

const userSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    trim: true,
  },
  imageUrl :{

    type:String,
    required:true,

  },
  accountType: {
    type: String,
    enum: ["Student", "Admin", "Instructor"],
  },
  phoneNumber:{
    type:Number,
    trim:true,
  },

  courses:{
    type:mongoose.Schema.ObjectId,
    Ref:"Course"
  },

  courseProgress:{
    type:mongoose.Schema.ObjectId,
    Ref:"CourseProgress",
  }



});

userSchema.post("save", async function (doc, next) {

  try {
    const response = await sendMail(
      this.email,
      "Signup Successfull",
      "ThankYou for register on Minor testing",
      "Your account is created successfully"
    );
    next();
    
  } catch (error) {
    next(error);
  }
  
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
