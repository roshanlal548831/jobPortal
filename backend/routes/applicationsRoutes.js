import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyjob, getAppicats, getAppiedJobs, updatedStatus } from "../controllers/application.js";
const router = express.Router();

router.route("/apply/:id").get(isAuthenticated,applyjob);
router.route("/get").get(isAuthenticated,getAppiedJobs);
router.route("/:id/applicants").get(isAuthenticated,getAppicats);
router.route("/status/:id/update").post(isAuthenticated,updatedStatus);


export default router