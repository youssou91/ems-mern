import User from '../models/User.js'
import bcrypt from'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        //Verification de l'existance de l'email
        if(!user){
            return res.status(404).json({succes:false, error: 'Utilisateur non existant !!!'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        //Verification de la correspondance du mot de passe
        if(!isMatch){
            return res.status(404).json({succes:false, error: 'Mot de passe incorrect !!!'})
        }
        //Création du token JWT
        const token = jwt.sign(
            {_id: user._id, role:user.role}, 
            process.env.JWT_KEY, 
            {expiresIn: "10d"}
        )
        res.status(200).json({
            succes:true, token, 
            user:{_id:user._id, name:user.nom, role:user.role},
        });
    } catch (err) {
        res.status(500).json({error: err.message});
    } 
}

const verify = (req, res) =>{
    return res.status(200).json({succes: true, user: req.user})
}

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Récupérer le token après "Bearer"
    if (!token) {
        return res.status(403).json({ success: false, error: 'Token is missing' });
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Failed to authenticate token' });
        }
        req.user = decoded; 
        next();
    });
};

export {login, verify, verifyToken}