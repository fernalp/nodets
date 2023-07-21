import { Request, Response } from "express"
import { handleHttp } from "../helpers/error.handle"
import { RequestExt } from "../types/requestext.interface";

export const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Estoy desde el controlador",
            user: req?.user
        })
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS", 500);
    }
}

