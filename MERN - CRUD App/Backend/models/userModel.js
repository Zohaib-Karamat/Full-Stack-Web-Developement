import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Assuming email should be unique based on existing controller logic
    },
    address: {
        type: String,
        required: true,
    }
});

export default mongoose.model("User", userSchema);
