import { Response } from "express";

export const handleHttp = async (res: Response, error: string, code: number = 500) => {
    res.status(code);
    res.send({ error: error })
}