import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singUpload } from "../middlewares/multer.js";
const router = express.Router();




router.route("/register").post(singUpload.single("profilePhoto"),register)
router.route("/login").post(login)
router.route("/profile/update").post(isAuthenticated,singUpload.fields([{name:"file"},{name:"profile"}]),updateProfile)
router.route("/logout").get(logout)

export default router