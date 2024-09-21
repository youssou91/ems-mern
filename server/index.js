import express from 'express'
import cors from 'cors'
import userRouter from './routes/auth.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', userRouter) // Use user router for authentication endpoints

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
