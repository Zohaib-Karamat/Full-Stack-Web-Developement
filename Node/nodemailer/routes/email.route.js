import { sendEmail, sendOtp, verifyOtp } from "../controller/email.controller.js";
import express from "express"

const route = express.Router();

route.post("/send",sendEmail)
route.post("/sendotp",sendOtp)
route.post("/verify",verifyOtp)

export default route