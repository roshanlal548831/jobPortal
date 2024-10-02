import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registeCompanyr, updateCompany } from "../controllers/companyController.js";
const router = express.Router();




router.route("/register").post(isAuthenticated,registeCompanyr);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,updateCompany);

export default router