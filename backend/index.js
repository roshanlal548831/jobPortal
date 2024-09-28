import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
const post = process.env.Port || 8000



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






app.listen(post,()=>{
    console.log(`server run on http://localhost:${post}`)
})