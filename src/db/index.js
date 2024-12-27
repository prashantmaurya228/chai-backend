 import mongoose from "mongoose";

 const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://prashantmaurya228:mXqEDZBVBMxEYX66@cluster0.ya1z1.mongodb.net/testDB")
        console.log("connection sucssesfull done")
    }
    catch(error){
        console.log("DB CONNECTION FAILED",error) 
    }
 }

 export default connectDB;