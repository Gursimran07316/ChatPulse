import express from 'express'
const router = express.Router();
import {addToGroup, createChat, createGroupChat, fetchChats, removeFromGroup, renameGroup} from '../controllers/chatControllers.js'
import { protect } from '../middleware/authMiddleware.js';
router.route('/').post(protect,createChat).get(protect, fetchChats);
router.route('/groupchat').post(protect,createGroupChat)
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
export default router