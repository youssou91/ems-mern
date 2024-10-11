import { extname } from "path"
import Employe from "../models/Employe.js"
import User from "../models/User.js"
import bcrypt from 'bcrypt'
import multer from "multer"
import path from "path"
// const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + path.extname(file.originalname))
    },
})

const upload = multer({ storage: storage })

// const ajoutEmploye = async (req, res) => {
//     try {
//         const {
//             nom,
//             prenom,
//             email,
//             employeId,
//             dateNaissance,
//             sexe,
//             statutMatrimonial,
//             designation,
//             departement,
//             salaire,
//             password,
//             role,
//         } = req.body;

//         // Vérification du mot de passe
//         if (!password) {
//             return res.status(400).json({ success: false, error: 'Le mot de passe est manquant!' });
//         }

//         // Vérification de l'email dans la collection User
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ success: false, error: 'Email déjà utilisé!' });
//         }

//         // Vérification de l'unicité de employeId dans la collection Employe
//         if (employeId) {
//             const existingEmploye = await Employe.findOne({ employeId });
//             if (existingEmploye) {
//                 return res.status(400).json({ success: false, error: 'employeId déjà utilisé!' });
//             }
//         }

//         // Hachage du mot de passe
//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         // Création d'un nouvel utilisateur
//         const newUser = new User({
//             nom: nom,
//             prenom: prenom,
//             email: email,
//             password: hashedPassword,
//             role: role,
//             profileImage: req.file ? req.file.filename : "",
//         });

//         const saveUser = await newUser.save();

//         // Création d'un nouvel employé
//         const newEmploye = new Employe({
//             userId: saveUser._id,
//             employeId,
//             dateNaissance,
//             sexe,
//             statutMatrimonial,
//             designation,
//             departement,
//             salaire
//         });

//         await newEmploye.save();
//         return res.status(200).json({ success: true, message: "Employé créé avec succès !!" });
//     } catch (error) {
//         console.error("Erreur lors de l'ajout de l'employé :", error.message);
//         return res.status(500).json({ success: false, error: 'Erreur lors de l\'ajout de l\'employé !!' });
//     }
// }
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
            statutMatrimonial,//a ajouter cote front 
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


const updateEmploye = async (req, res) => {

}

const deleteEmploye = async (req, res) => {

}

const getEmployes = async (req, res) => {

}

const getEmployeById = async (req, res) => {

}

export {upload, ajoutEmploye, updateEmploye, deleteEmploye, getEmployes, getEmployeById };