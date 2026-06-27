import express from "express";
import dotenv from "dotenv";

dotenv.config();
import paymentRoutes from "./routes/paymentRoutes.js";


const app = express();

app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Payment API Running",
  });
});

app.get("/success", (req, res) => {
  res.send("<h1>Payment Successful ✅</h1>");
});

app.get("/cancel", (req, res) => {
  res.send("<h1>Payment Cancelled ❌</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});