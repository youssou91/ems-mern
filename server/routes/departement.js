import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutDepartement, getDepartements } from "../controllers/departementController.js";

const router = exp.Router();

router.post('/ajout', authmiddleware, ajoutDepartement);
router.get('/', authmiddleware, getDepartements);

export default router;