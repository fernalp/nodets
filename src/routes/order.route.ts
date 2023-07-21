import { Router } from "express";
import { getItems } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session.middleware";

/**
 * A esta ruta solo pueden acceder personas con sesion activa
 * que tengan un jwt valido
 */
const router = Router();

router.get("/", checkJwt, getItems)


export { router };