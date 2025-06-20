// const mongoose = require("mongoose");
// require("dotenv").config();

// const dataBaseConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       serverSelectionTimeoutMS: 30000, // Increase the timeout if needed
//       socketTimeoutMS: 45000, // Increase the socket timeout if needed
//     });
//     console.log("Database Connection Successful");
//   } catch (error) {
//     console.error("Database Connection Error:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = { dataBaseConnection };

const mongoose = require("mongoose");

require("dotenv").config();

const dataBaseConnection = async () => {
    console.log(process.env.MONGODB_URL)
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("DataBase Connection SuccessFull"))
        .catch((error) => {
        console.log("error : " , error)
        console.log(error.message)
        process.exit(1);
    });

}
module.exports = {dataBaseConnection};

// const mongoose = require("mongoose");
// require("dotenv").config();
// //const DATABASE_URL = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/Study_notion_db";
 


// exports.dataBaseConnection = () => {
//     mongoose.connect( process.env.MONGODB_URL , {serverSelectionTimeoutMS : 600000000})
//     .then(() => console.log("DB Connected Successfully"))
//     .catch( (error) => {
//         console.log("DB Connection Failed");
//          console.log(error.message);
//          process.exit(1);
//     } )
// }; 