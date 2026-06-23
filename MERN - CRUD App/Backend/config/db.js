import mongoose from "mongoose";
import { MESSAGES } from "./constants.js";

const connectDB = async () => {
    try {
        const MONGO_URL = process.env.MONGO_URL || 7000;
        await mongoose.connect(MONGO_URL);
        console.log(MESSAGES.DB_CONNECTED);
    } catch (error) {
        console.error(`${MESSAGES.DB_CONNECTION_ERROR}: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
