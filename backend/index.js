import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectToDatabase } from './utils/db.js';
import userRouter from './routes/userRoutes.js';
const app = express();
const post = process.env.Port || 3000


connectToDatabase()

// middlewaew
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const corsOptions = {
    origin: "http://localhost:5173",
    Credentials: true,
    methods:["GET","POST"]
}

app.use(cors(corsOptions));

//http://localhost:8000/api/b1/user

app.use("/api/b1/user",userRouter)



app.listen(post,()=>{
    console.log(`server run on http://localhost:${post}`)
})