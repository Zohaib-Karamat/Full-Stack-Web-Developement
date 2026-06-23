import express from "express"
import http from "http"
import path from "path"
import {Server} from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server) 

// socket.io
io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
        console.log("New user message:",message)
        socket.broadcast.emit("message",message)
    })
})


app.use(express.static(path.resolve("./public")))
app.get("/",(req,res)=>{
    res.sendFile("./public/index.html")
})
server.listen(7000,()=>{
    console.log("Server started at port 7000")
})
