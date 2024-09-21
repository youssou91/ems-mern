import exp from 'express'
import { login } from '../controllers/authController.js'

const router = exp.Router()

router.post('/logni', login)

export default router;