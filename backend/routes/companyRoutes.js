import express, { Router } from 'express'
import upload from '../middlewares/multer.js'
import { createCompany, getCompaniesByType } from '../controllers/companyLogo.js';

const companyRouter = Router();

companyRouter.post('/company-create', upload.single('logo'), createCompany);
companyRouter.get('/', getCompaniesByType)

export default companyRouter;