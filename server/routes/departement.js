import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutDepartement, updateDepartements, getDepartement, getDepartements } from "../controllers/departementController.js";

const router = exp.Router();

router.get('/', authmiddleware, getDepartements);
router.post('/ajout', authmiddleware, ajoutDepartement);
router.get('/:id', authmiddleware, getDepartement);
router.put('/:id', authmiddleware, updateDepartements);

export default router;