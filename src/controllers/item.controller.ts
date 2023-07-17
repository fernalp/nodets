import { Request, Response } from "express"
import { handleHttp } from "../helpers/error.handle"
import { deleteCar, getAllCar, getCarById, insertCar, updateCar } from "../services/item.service";

export const getItems = async (req: Request, res: Response) => {
    try {
        const items = await getAllCar();
        if (!items || !Array.isArray(items)) {
            res.status(409);
            res.send({ data: {} });
        } else {
            res.status(200);
            res.send({ data: items })
        }
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS", 500);
    }
}

export const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await getCarById(id);
        if (!item) {
            res.status(404);
            res.send({ data: {} })
        } else {
            res.status(200);
            res.send({ data: item })
        }
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM", 500);
    }
}

export const createItem = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const response = await insertCar(body);
        res.status(201)
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_CREATE_ITEM", 500);
    }
}

export const updateItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const updatedItem = await updateCar(id, body);
        res.status(200);
        res.send({ data: updatedItem });
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM", 500);
    }
}

export const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const deletedItem = await deleteCar(id);
        if (!deletedItem) {
            res.status(400);
            res.send({ data: "BAD_REQUEST" })
        } else {
            res.status(204);
        }
    } catch (e) {
        console.log(e);
        handleHttp(res, "ERROR_DELETE_ITEM", 500);
    }
}