import exp from "express";
import authmiddleware from "../middleware/authMiddleware.js";
import { ajoutEmploye, getEmploye, getEmployes, upload } from "../controllers/employeController.js";
const router = exp.Router();


router.get('/', authmiddleware, getEmployes);
router.post('/ajout', authmiddleware, upload.single('image'), ajoutEmploye);
// router.get('/:id', getEmploye);

router.get('/:id', async (req, res) => {
    const employeId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(employeId)) {
        return res.status(400).json({ error: 'ID invalide' });
    }
    try {
        const employe = await Employe.findById(employeId);
        if (!employe) {
            return res.status(404).json({ error: 'Employé non trouvé' });
        }
        res.json(employe);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'employé' });
    }
});


// router.get('/:id', authmiddleware, getEmployeById);
// router.put('/:id', authmiddleware, updateEmploye);
// router.delete('/:id', authmiddleware, deleteEmploye);
// Route: /employes/:id
// router.get('/employes/:id', getEmployeById);


export default router;