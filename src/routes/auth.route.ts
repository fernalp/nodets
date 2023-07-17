import { Router } from "express";
import { loginUserCtrl, registerUser } from "../controllers/auth.controllers";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUserCtrl);

export { router };