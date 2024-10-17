import Departement from "../models/Departement.js";

const ajoutDepartement = async (req, res) => {
    const { nom_dpmt, description } = req.body;

    // Validation des données
    if (!nom_dpmt) {
        return res.status(400).json({ success: false, err: "Le nom du département est requis." });
    }

    try {
        // console.log("Tentative d'ajout du département :", { nom_dpmt, description });

        const newDepartement = new Departement({ nom_dpmt, description });
        await newDepartement.save();
        // console.log("Département ajouté avec succès :", newDepartement);
        return res.status(200).json({ success: true, departement: newDepartement });
    } catch (err) {
        // console.error("Erreur lors de l'ajout du département:", err);
        return res.status(500).json({ success: false, err: "Server Error" });
    }
};

const getDepartements = async (req, res) => {
    try {
        const departements = await Departement.find();
        return res.status(200).json({ success: true, departements });
    } catch (err) {
        return res.status(500).json({ success: false, err: "Server Error" });
    }
};

const updateDepartements = async (req, res) => {
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

const getDepartement = async (req, res) => {
    try {
        const {id} = req.params;
        const departements = await Departement.findById({_id:id});
        return res.status(200).json({success:true, departements})
    } catch (err) {
        return res.status(500).json({ success: false, err: "Erreur lors de la récupération du département" });
    } 
}

const deleteDepartements = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteDpt = await Departement.findByIdAndDelete({_id: id});
        return res.status(200).json({ success: true,  deleteDpt });
    } catch (err) {
        return res.status(500).json({ success: false, err: "Erreur lors de la suppression du département" });
    }
}

export  {ajoutDepartement, getDepartement, getDepartements, updateDepartements , deleteDepartements};
