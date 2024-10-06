const fs = require("fs")
const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudianry = async(localFilePath) => {

    try{
        if(!localFilePath){
            return null
        }

        const response = await cloudinary.uploader
       .upload(
           localFilePath
       )
       .catch((error) => {
           console.log(error);
       });


        console.log("File uploaded on cloudinary" , response.url)

        fs.unlinkSync(localFilePath)
        return response;

    }catch(error){

        fs.unlinkSync(localFilePath)

        return null
    }
}

module.exports = {uploadOnCloudianry}