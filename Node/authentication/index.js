import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";    
import route from "./routes/userRoute.js";


const app = express();

app.use(bodyParser.json())
dotenv.config();
// dotenv.config({quiet:"true"});     //  use it when you not want to receive logs about env
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL


mongoose.connect(MONGO_URL).then(()=>{
    console.log("DB connected successfuly")

    app.listen(PORT,()=>{
        console.log("App is running on PORT: "+PORT)
    })

})
.catch((err)=>{
    console.log(err)
})


app.use("/api",route)



