import User from "./models/user"
import bcrypt from 'bcrypt'
import connectToDatabae from "./db/dbjs"

const userRegister = async()=>{
    connectToDatabae();
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