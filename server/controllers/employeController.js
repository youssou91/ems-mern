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
        // const employes = await Employe.find();
        const employes = await Employe.find().populate('userId', {password: 0}).populate("departement");
        return res.status(200).json({ success: true, employes });
    } catch (err) {
        return res.status(500).json({ success: false, err: "Server Error" });
    }
};

const updateEmploye = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom_dpmt, description } = req.body;
        const updateDpt = await Departement.findByIdAndUpdate({_id: id},
            { nom_dpmt, description }, { new: true });
        return res.status(200).json({ success: true, departement: updateDpt });
    } catch (err) {
        return res.status(500).json({ success: false, err: "Erreur lors de la mise à jour du département" });
    }
}

const getEmployeById = async (req, res) => {
    try {
        const {id} = req.params;
        const departements = await Departement.findById({_id:id});
        return res.status(200).json({success:true, departements})
    } catch (err) {
        return res.status(500).json({ success: false, err: "Erreur lors de la récupération du département" });
    } finally {
        
    }
}

const deleteEmploye = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteDpt = await Departement.findByIdAndDelete({_id: id});
        return res.status(200).json({ success: true,  deleteDpt });
    } catch (err) {
        return res.status(500).json({ success: false, err: "Erreur lors de la suppression du département" });
    }
}

export {upload, ajoutEmploye, updateEmploye, deleteEmploye, getEmployes, getEmployeById };