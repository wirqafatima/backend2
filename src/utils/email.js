import nodemailer from 'nodemailer'
import 'dotenv/config'
export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
})



export const sendEmail = async ({ email, otp }) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Welcome to testabc",
        text: `your otp is ${otp}`,
        html: `Your OTP is ${otp}`
    })
}