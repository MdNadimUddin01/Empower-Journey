const nodemailer = require("nodemailer");

exports.sendMail = async(email,title , otp , description) => {

    try{

        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure : false,
            auth : {
                user: "mdnadimuddin5656@gmail.com",
                pass: "bvdr sldr mfnz toxz"
            }
        });

        const response = await transporter.sendMail({
            from:"Minor testing",
            to : `${email}`,
            subject:`${title}`,
            html:`
            <div>
                <h2>${description}</h2>
                <h1>${otp}</h1>
            </div>`
        })


    }catch(error){

        console.log("otp send Unsucceesfull : " , error.message);

    }

}