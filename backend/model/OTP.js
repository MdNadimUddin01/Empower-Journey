const mongoose = require("mongoose");
const { sendMail } = require("../utils/nodemailer");

const OTPSchema = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    expire: 60 * 5,
  },

  email: {
    type: String,
    required: true,
  },
});

OTPSchema.pre("save", async function (next) {
  try {
    const response = await sendMail(
      this.email,
      "Otp Verification for Signup",
      this.otp,
      "This code is only valid for next 5 minutes"
    );

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const OTP = mongoose.model("OTP", OTPSchema);
module.exports = { OTP };
