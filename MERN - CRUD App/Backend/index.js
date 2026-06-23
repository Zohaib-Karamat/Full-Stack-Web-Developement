import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on PORT: ${PORT}`);
    });
});

// Routes
app.use("/api", route);

// Global Error Handler Middleware (must be after routes)
app.use(errorHandler);