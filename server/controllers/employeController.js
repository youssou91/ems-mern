import { extname } from "path"
import Employe from "../models/Employe.js"
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import multer from "multer"
import path from "path"
import mongoose from 'mongoose';  // Ajoutez ceci en haut de votre fichier

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + path.extname(file.originalname))
    },
})

const upload = multer({ storage: storage })

const ajoutEmploye = async (req, res) => {
    try {
        const {
            nom,
            prenom,
            email,
            employeId, // cette valeur peut être fournie, sinon elle sera générée
            dateNaissance,
            sexe,
            statutMatrimonial,
            designation,
            departement,
            salaire,
            password,
            role,
        } = req.body;

        if (!password) {
            return res.status(400).json({ success: false, error: 'Le mot de passe est manquant!' });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, error: 'Email déjà utilisé!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            nom,
            prenom,
            email,
            password: hashedPassword,
            role,
            profileImage: req.file ? req.file.filename : "",
        });
        const saveUser = await newUser.save();

        // Générer un employeId s'il n'est pas fourni
        const generatedEmployeId = employeId || `EMP-${new Date().getTime()}`; // Par exemple, une base sur un timestamp

        const newEmploye = new Employe({
            userId: saveUser._id,
            employeId: generatedEmployeId, // Utiliser l'employeId généré si absent
            dateNaissance,
            sexe,
            statutMatrimonial,
            designation,
            departement,
            salaire,
        });

        await newEmploye.save();
        return res.status(200).json({ success: true, message: "Employé créé avec succès !!"  });
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'employé :", error.message);
        return res.status(500).json({ success: false, error: 'Erreur lors de l\'ajout de l\'employé !!' });
    }
};

const getEmployes = async (req, res) => {
    try {
        const employes = await Employe.find().populate('userId', {password: 0}).populate("departement");
        return res.status(200).json({ success: true, employes });
    } catch (err) {
        return res.status(500).json({ success: false, err: "Server Error" });
    }
};
const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employe = await Employe.findById({_id: id}).populate('userId', {password: 0}).populate("departement");
        return res.status(200).json({ success: true, employe });
    } catch (err) {
        return res.status(500).json({ success: false, err: "Server Error" });
    }
};

// const getEmploye = async (req, res) => {
//     const { Id } = req.params; // Récupère l'id de la requête
//     try {
//         // Cherche l'employé avec employeId ou _id et remplit les informations liées
//         const employe = await Employe.findById(Id)
//             .populate('userId', { password: 0 }) // Exclure le mot de passe
//             .populate('departement'); // Peupler aussi les détails du département
//         if (!employe) {
//             return res.status(404).json({ success: false, message: "Employé non trouvé." });
//         }      
//         return res.status(200).json({ success: true, employe });
//     } catch (err) {
//         console.error("Erreur lors de la récupération de l'employé :", err.message);
//         return res.status(500).json({ success: false, err: "Erreur serveur." });
//     }
// };

export {upload, ajoutEmploye, getEmployes, getEmployee };