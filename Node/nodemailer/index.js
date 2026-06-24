import express from "express"
import dotenv from "dotenv"
import emailRoutes from "./routes/email.route.js"

dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT;


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
app.use("/api",emailRoutes)