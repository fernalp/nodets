import { Router } from "express";
import { checkJwt } from '../middleware/session.middleware';
import multerMiddleware from "../middleware/file.middleware";
import { getFile } from "../controllers/storage.controller";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myFile"), getFile);

export { router };