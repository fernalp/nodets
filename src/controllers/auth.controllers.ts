import { Request, Response } from "express"
import { createUser, loginUser } from "../services/auth.service"

export const registerUser = async ({ body }: Request, res: Response) => {
    try {
        const responseUser = await createUser(body);
        res.status(200).send({ data: responseUser })
    } catch (e) {

    }
}

export const loginUserCtrl = async ({ body }: Request, res: Response) => {
    try {
        const login = await loginUser(body);
        res.status(200).send({ data: login })
    } catch (e) {

    }
}