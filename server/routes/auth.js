import exp from 'express'
import { login } from '../controllers/authController.js'

const router = exp.Router()

router.post('/login', login)
router.post('/verify', login)

export default router;