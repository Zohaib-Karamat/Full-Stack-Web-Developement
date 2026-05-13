import bcryptjs from "bcryptjs"
import userModel from "../model/userModel.js"
import jwt from "jsonwebtoken"
import { OAuth2Client } from "google-auth-library"

const getJwtSecret = () => {
    const jwtSecret = process.env.JWT_SECRET || process.env["JWT-SECRET"]

    if (!jwtSecret) {
        throw new Error("JWT secret not configured")
    }

    return jwtSecret
}

const createAuthToken = (userId) => {
    return jwt.sign({ id: userId }, getJwtSecret(), { expiresIn: "7d" })
}

const getGoogleClientId = () => {
    const googleClientId = process.env.GOOGLE_CLIENT_ID

    if (!googleClientId) {
        throw new Error("Google client id not configured")
    }

    return googleClientId
}



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

        if (!user.password) {
            return res.status(400).json({ message: "This account uses Google sign-in" })
        }

        const isMatched = await bcryptjs.compare(password, user.password)

        if (!isMatched) {
            return res.status(400).json({
                message: "Invalid Credentials",
            });
        }

        // create token
        const token = createAuthToken(user._id)

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

export const googleLogin = async (req, res) => {
    try {
        const { idToken } = req.body

        if (!idToken) {
            return res.status(400).json({ message: "Google idToken is required" })
        }

        const googleClientId = getGoogleClientId()
        const client = new OAuth2Client(googleClientId)
        const ticket = await client.verifyIdToken({
            idToken,
            audience: googleClientId,
        })

        const payload = ticket.getPayload()

        if (!payload || !payload.email || !payload.sub) {
            return res.status(400).json({ message: "Google token payload is incomplete" })
        }

        const email = payload.email.toLowerCase()
        const name = payload.name || "Google User"
        const googleId = payload.sub
        const avatar = payload.picture

        let user = await userModel.findOne({ email })

        if (!user) {
            user = await userModel.create({
                name,
                email,
                googleId,
                authProvider: "google",
                avatar,
            })
        } else {
            const updates = {}

            if (!user.googleId) {
                updates.googleId = googleId
            }

            if (!user.avatar && avatar) {
                updates.avatar = avatar
            }

            if (Object.keys(updates).length > 0) {
                user = await userModel.findByIdAndUpdate(user._id, updates, { new: true })
            }
        }

        const token = createAuthToken(user._id)

        return res.status(200).json({
            message: "Login successful",
            token,
        })
    } catch (error) {
        console.log("Error: " + error)
        return res.status(500).json({ message: "Google authentication failed" })
    }
}

