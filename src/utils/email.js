import nodemailer from 'nodemailer'
import 'dotenv/config'
export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    // host: "smtp.google.com",
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
})



export const sendEmail = async ({ email }) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Welcome to testabc",
        text: "Thanks for joining testabc",
        html: "<h1> welcome to testabc</h1>"
    })
}