import User from '../models/User.js'
import bcrypt from'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        //Verification de l'existance de l'email
        if(!user){
            return res.status(400).json({succes:false, error: 'Utilisateur non existant !!!'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        //Verification de la correspondance du mot de passe
        if(!isMatch){
            return res.status(400).json({succes:false, error: 'Mot de passe incorrect !!!'})
        }
        //Création du token JWT
        const token = jwt.sign(
            {_id: user._id, role:user.role}, 
            process.env.JWT_KEY, 
            {expiresIn: "10d"}
        )
        res.status(200).json({
            succes:true, token, 
            user:{_id:user._id, name:user.name, role:user.role},
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    } 
}

const verify = (req, res) =>{
    return res.status(200).json({succes: true, user: req.user})
}
export {login, verify}