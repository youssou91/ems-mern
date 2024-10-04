import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutDepartement, updateDepartements, getDepartement, getDepartements, deleteDepartements } from "../controllers/departementController.js";

const router = exp.Router();

router.get('/', authmiddleware, getDepartements);
router.post('/ajout', authmiddleware, ajoutDepartement);
router.get('/:id', authmiddleware, getDepartement);
router.put('/:id', authmiddleware, updateDepartements);
router.delete('/:id', authmiddleware, deleteDepartements);

export default router;