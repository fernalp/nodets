import { Router } from "express";
import { createItem, deleteItem, getItem, getItems, updateItem } from "../controllers/item.controller";

const router = Router();

router.get("/all", getItems);

router.get("/:id", getItem);
router.post("/create", createItem);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);

export { router };