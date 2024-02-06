import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import path from "path"
//configure env
dotenv.config({ path: './.env' })

//database configcon
connectDB();

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/auth',authRoutes)
//rest api
app.get('/api',(req,res)=>{
    res.send({
        message:'welcome to winndeal'
    })
})

//port
const PORT=process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgGreen.white)
})