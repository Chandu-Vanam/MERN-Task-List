import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// const db = 'mongodb+srv://vnmchandu:chandu123@cluster0.9cjyhdj.mongodb.net';
const db = process.env.MONGO_URL;

const connectDB = async () => {
    try{
        console.log(db);
        await mongoose.connect(db);
        console.log("MongoDB is connected")
    }catch(err) {
        console.error(err.message);
        process.exit(1);
    }
};

export {connectDB};