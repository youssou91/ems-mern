import express from 'express'
import cors from 'cors'
import userRouter from './routes/auth.js'
import departementRouter from './routes/departement.js'

import connectToDatabase from './db/db.js'

// Connexion a la base de donnees MongoDB 
connectToDatabase
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', userRouter) // Use user router for authentication endpoints
app.use('/api/departement', departementRouter) // Use departement router for departement endpoints

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
