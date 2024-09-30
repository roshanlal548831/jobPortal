import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const router = express.Router();




router.route("/register").post(register)
router.route("/login").post(login)
router.route("/profileUpdate").post(isAuthenticated,updateProfile)
router.route("/logout").get(logout)

export default router