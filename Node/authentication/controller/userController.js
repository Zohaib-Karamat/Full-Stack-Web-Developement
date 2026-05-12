import bcryptjs from "bcryptjs"
import userModel from "../model/userModel.js"




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
        console.log("Error: "+error)
    }


}