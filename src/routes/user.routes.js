import express from 'express';
import { userController, userLoginController, userLogoutController } from '../controllers/user.controller.js';
const router = express.Router();

router.get("/", userController)
router.post("/login", userLoginController)
router.post("/logout", userLogoutController)


export default router