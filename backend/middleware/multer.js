const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp') //cb = call back function
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      
      cb(null, file.originalname)
    }
    
  })
  
exports.upload = multer({ 
    storage: storage 
})