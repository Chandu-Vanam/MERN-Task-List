import mongoose from "mongoose";

const db = 'mongodb+srv://vnmchandu:chandu123@cluster0.9cjyhdj.mongodb.net';
// const db = process.env.MONGO_URL;

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected")
    }catch(err) {
        console.error(err.message);
        process.exit(1);
    }
};

export {connectDB};