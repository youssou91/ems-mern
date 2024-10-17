import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import departementRouter from './routes/departement.js'
import employeRouter from './routes/employe.js'


import connectToDatabase from './db/db.js'


// Connexion a la base de donnees MongoDB 
connectToDatabase()
const app = express()
app.use(express.static('public/uploads'))
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter) 
app.use('/api/departement', departementRouter) 
app.use('/api/employe', employeRouter) 


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
