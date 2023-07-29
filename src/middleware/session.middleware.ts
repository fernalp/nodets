import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/jwt.handle";
import { RequestExt } from "../interface/req-ext.interface";



export const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {

        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        console.log(isUser)
        if (!isUser) {
            res.status(401);
            res.send("INVALID SESSION");
        } else {
            req.user = isUser;
            next();
        }
    } catch (e) {
        res.status(400);
        res.send("INVALID SESSION");
    }
}