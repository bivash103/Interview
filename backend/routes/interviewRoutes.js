import { Router } from "express";
import { createInterview, getInterviewById, getInterviewsByCompanyAndRole } from "../controllers/interviewController.js";
import { protect } from "../middlewares/auth.js";

const interviewRoutes = Router();

// Add middleware here 👇
interviewRoutes.post("/create", protect, createInterview);
interviewRoutes.get('/by-role', getInterviewsByCompanyAndRole);
interviewRoutes.get("/:id",  getInterviewById);


export default interviewRoutes;
