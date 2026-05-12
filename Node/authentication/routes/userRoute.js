import express from "express"
import { getProfile, loginUser, registerUser } from "../controller/userController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"




const route = express.Router()


route.post("/register", registerUser)
route.post("/login", loginUser)
route.get("/me", authMiddleware, getProfile)



export default route