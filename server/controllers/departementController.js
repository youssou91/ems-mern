import Departement from "../models/Departement.js";

const ajoutDepartement = async (req, res) => {
    const { nom_dpmt, description } = req.body;

    // Validation des données
    if (!nom_dpmt) {
        return res.status(400).json({ success: false, err: "Le nom du département est requis." });
    }

    try {
        console.log("Tentative d'ajout du département :", { nom_dpmt, description });

        const newDepartement = new Departement({ nom_dpmt, description });
        await newDepartement.save();

        console.log("Département ajouté avec succès :", newDepartement);

        return res.status(200).json({ success: true, departement: newDepartement });
    } catch (err) {
        console.error("Erreur lors de l'ajout du département:", err);
        return res.status(500).json({ success: false, err: "Server Error" });
    }
};


export  {ajoutDepartement};
