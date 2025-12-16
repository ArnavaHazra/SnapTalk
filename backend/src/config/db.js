import mongoose from "mongoose";
import { ENV } from "./env.js"


export const  connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log("MONGO_DB connected successfully 🥲")
    } catch (error) {
        console.log("Error connecting to MONGO_DB:- ", error)
        process.exit(1);
    }
}