import express from 'express'
import userRoutes from './src/routes/user.routes.js';
import dotenv from 'dotenv'
import connectDB from './src/config/db.js';
import productRoutes from './src/routes/product.routes.js'
dotenv.config();

const app = express()
const PORT = 5000

app.use(express.json())


app.use("/user", userRoutes)
app.use("/product", productRoutes)


app.listen(5000, async () => {

    await connectDB()
    console.log("Server started on port 5000")
})
