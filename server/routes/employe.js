import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutEmploye, upload } from "../controllers/employeController.js";

const router = exp.Router();

// router.get('/', authmiddleware, getDepartements);
router.post('/ajout', authmiddleware, upload.single('image'), ajoutEmploye);
// router.get('/:id', authmiddleware, getDepartement);
// router.put('/:id', authmiddleware, updateDepartements);
// router.delete('/:id', authmiddleware, deleteDepartements);

export default router;