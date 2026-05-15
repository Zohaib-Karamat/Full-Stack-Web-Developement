import os from "os"
import cluster from "cluster"
import express from "express"


const cors = os.cpus().length
const app = express();




app.listen(3000,()=>{
        console.log("App is running on Port: 3000")
    })
console.log(cors)