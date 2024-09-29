import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutDepartement } from "../controllers/departementController.js";

const router = exp.Router();

router.post('/ajout', authmiddleware, ajoutDepartement);

export default router;