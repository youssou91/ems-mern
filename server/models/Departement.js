import mongoose from "mongoose";

const departementSchema = new mongoose.Schema({
    nom_dpmt: { type: String, required: true},
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Departement = mongoose.model("Departement", departementSchema);

export default Departement;

