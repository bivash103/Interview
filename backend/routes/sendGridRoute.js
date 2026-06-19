import express, { Router } from 'express'
import { contactMail } from '../controllers/sendGridController.js';
import { protect } from '../middlewares/auth.js';


const router = express.Router();

router.post('/send', contactMail);

export default router;