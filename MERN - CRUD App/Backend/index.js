import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import route from "./route/userRoute.js"



const app = express()
app.use(bodyParser.json())
dotenv.config()
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL || 7000;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("DB connected successfuly")
        app.listen(PORT,()=>{
        console.log(`App is running on PORT: ${PORT}`)
    })
    })
    .catch((err) => {
        console.log(err)
    })

    
app.use("/api",route)