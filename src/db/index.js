 import mongoose from "mongoose";

 const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/testDB")
        console.log("connection sucssesfull")
    }
    catch(error){
        console.log("DB CONNECTION FAILED",error)
    }
 }

 export default connectDB;