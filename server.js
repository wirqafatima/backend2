import express from 'express'
import userRoutes from './src/routes/user.routes.js';




const app = express()
const PORT = 5000

app.use(express.json())


app.use("/", userRoutes)


app.listen(5000, () => {

    console.log("Server started on port 5000")
})
