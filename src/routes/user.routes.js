import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

console.log("DEBUG:", registerUser); // 👈 ADD THIS

router.post("/register", registerUser);

export default router;