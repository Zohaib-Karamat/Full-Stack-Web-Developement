import { sendEmail, sendOtp } from "../controller/email.controller.js";
import express from "express"

const route = express.Router();

route.post("/send",sendEmail)
route.post("/sendotp",sendOtp)

export default route