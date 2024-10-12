import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutEmploye, deleteEmploye, getEmployeById, getEmployes, updateEmploye, upload } from "../controllers/employeController.js";

const router = exp.Router();

router.get('/', authmiddleware, getEmployes);
router.post('/ajout', authmiddleware, upload.single('image'), ajoutEmploye);
router.get('/:id', authmiddleware, getEmployeById);
router.put('/:id', authmiddleware, updateEmploye);
router.delete('/:id', authmiddleware, deleteEmploye);

export default router;