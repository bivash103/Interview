import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { getProfile, protect } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/signup", registerUser);
userRouter.post("/login", loginUser);
userRouter.get('/profile', protect, getProfile)

export default userRouter;