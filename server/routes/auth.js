import exp from 'express'
import { login, verify } from '../controllers/authController.js'
import autthMiddleware from '../middleware/authMiddleware.js'
// import { verify } from 'jsonwebtoken'

const router = exp.Router()

router.post('/login', login)
router.get('/verify', autthMiddleware, verify)

export default router;