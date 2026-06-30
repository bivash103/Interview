import express from 'express'
import { userChat } from '../controllers/geminiController.js'

const geminiRouter = express.Router()

geminiRouter.post('/chat', userChat);

export default geminiRouter;