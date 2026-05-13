import express from "express"
import { getProfile, googleLogin, loginUser, registerUser } from "../controller/userController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"




const route = express.Router()


route.post("/register", registerUser)
route.post("/login", loginUser)
route.post("/google", googleLogin)
route.get("/me", authMiddleware, getProfile)



export default route