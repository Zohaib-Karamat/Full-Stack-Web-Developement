import express from "express";

import {
  createPayment,
  getPaymentDetails,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/checkout", createPayment);

router.get("/:id", getPaymentDetails);

export default router;