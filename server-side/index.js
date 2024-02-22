import express from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db.js'
import {router} from './routes/Task.routes.js'

import cors from 'cors';

const app = express();
dotenv.config();

//initialize middlewares
app.use(express.json({extended: false}));
app.get("/", (req,res)=> res.send("Server is up and running"));

const PORT = 3000;

//connect database
connectDB();

//use cors
app.use(cors({ origin: true, credentials: true}));

//use routes
app.use('/api/v1/task/', router)
app.listen(PORT, ()=>{
    console.log(`server is runnning succesfully on port ${PORT}`)
})
