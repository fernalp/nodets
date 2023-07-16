import { Response } from "express";

export const handleHttp = async (res: Response, error: string, code: number) => {
    res.status(code | 500);
    res.send({ error: error })
}