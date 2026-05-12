import jwt from "jsonwebtoken"
import userModel from "../model/userModel.js"

export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || ""
        const token = authHeader.startsWith("Bearer ")
            ? authHeader.slice(7).trim()
            : null

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" })
        }

        const jwtSecret = process.env.JWT_SECRET || process.env["JWT-SECRET"]

        if (!jwtSecret) {
            return res.status(500).json({ message: "JWT secret not configured" })
        }

        const decoded = jwt.verify(token, jwtSecret)

        const user = await userModel.findById(decoded.id).select("-password")

        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }

        req.user = user
        return next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }
}
