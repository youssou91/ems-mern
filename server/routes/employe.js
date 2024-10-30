import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutEmploye,  getEmployes, upload, getEmployee } from "../controllers/employeController.js";
const router = exp.Router();
router.get('/', authmiddleware, getEmployes);
router.post('/ajout', authmiddleware, upload.single('image'), ajoutEmploye);
router.get('/:id', getEmployee);
export default router;