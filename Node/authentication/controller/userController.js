import bcryptjs from "bcryptjs"
import userModel from "../model/userModel.js"
import jwt from "jsonwebtoken"



export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const isEmailExists = await userModel.findOne({ email });

        if (isEmailExists) {
            return res.status(404).json({ message: "User Already exist" })
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(200).json({ message: "User registerd successfuly", user })
    } catch (error) {
        console.log("Error: " + error)
    }


}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isMatched = await bcryptjs.compare(password, user.password)

        if (!isMatched) {
            return res.status(400).json({
                message: "Invalid Credentials",
            });
        }

        // create token
        const jwtSecret = process.env.JWT_SECRET || process.env["JWT-SECRET"];

        if (!jwtSecret) {
            return res.status(500).json({ message: "JWT secret not configured" });
        }

        const token = jwt.sign(
            { id: user._id },
            jwtSecret,
            { expiresIn: "7d" }
        )

        return res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Server error" });
    }


}

export const getProfile = async (req, res) => {
    return res.status(200).json({ user: req.user })
}

