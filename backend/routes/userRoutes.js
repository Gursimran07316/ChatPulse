import express from 'express'
const router = express.Router();
import {loginUser, registerUser} from '../controllers/userControllers.js'
router.route('/registeruser').post(registerUser)
router.route('/login').post(loginUser)
export default router