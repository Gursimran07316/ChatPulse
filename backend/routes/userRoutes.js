import express from 'express'
const router = express.Router();
import {getAllUsers, loginUser, registerUser} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js';
router.route('/').post(registerUser)
router.route('/').get(protect,getAllUsers)
router.route('/login').post(loginUser)
export default router