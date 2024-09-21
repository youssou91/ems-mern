import User from "./models/user.js"
import bcrypt from 'bcrypt'
import connectToDatabase from "./db/db.js"

const userRegister = async () =>{
    connectToDatabase();
    try {
        const hashePassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashePassword,
            role: "admin"
        })        
        await newUser.save()
    } catch (err) {
        console.log(err)
    } 
}
userRegister();