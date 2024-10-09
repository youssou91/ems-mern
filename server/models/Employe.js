import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref:"User", required: true},
    employeId: { type: String, required: true, unique: true },
    dateNaissance: { type: Date },
    sexe: { type: String },
    statutMatrimonial: { type: String },
    designation: { type: String },
    departement: { type: Schema.Types.ObjectId, ref: 'Departement' },
    salaire: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const Employe = mongoose.model("Employe", employeSchema);

export default Employe;