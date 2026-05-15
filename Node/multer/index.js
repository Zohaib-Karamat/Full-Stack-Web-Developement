import express from "express"
import multer from "multer"
import path from "path"


const app = express();
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))


app.get("/",(req,res)=>{
    return res.render("home")
})

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})


const upload = multer({storage:storage})

app.post("/upload",upload.single("file"),(req,res)=>{
    return res.redirect("/")
})

app.listen(3000,()=>{
    console.log("App is running on: 3000")
})