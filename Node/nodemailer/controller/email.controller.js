import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Learning Nodemailer",
      text: "Hello from Node.js and Nodemailer",
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

let storedOtp = null;

export const sendOtp = async(req,res)=>{
    try {
        const {email} = req.body

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS,
            }
        })

        const otp = Math.floor(
            100000 + Math.random() * 900000
        )


        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:"OTP Verification",
            text:`Your otp is ${otp}`
        })

        storedOtp = otp;
        res.status(200).json({
            success:true,
            message:"Otp send successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Otp not send successfully"
        })
    }
};



export const verifyOtp = async(req,res)=>{
    try {
        const {otp} = req.body

        if (Number(otp) === storedOtp) {
            return res.status(200).json({
                success : true , 
                message : "Otp verified successfuly"
            })
        }
    } catch (error) {
        return res.status(500).json({
                success : false , 
                message : "Otp incorrect"
            })
    }
}

