import express from 'express'
const router = express.Router();
import {createChat} from '../controllers/chatControllers.js'
import { protect } from '../middleware/authMiddleware.js';
router.route('/').post(protect,createChat)
export default router