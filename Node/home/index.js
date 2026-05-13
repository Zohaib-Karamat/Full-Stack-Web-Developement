import express from "express"
import ejs from "ejs"

const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    try {
        res.render("home")
    } catch (error) {
        console.error(error)
    }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000") 
})