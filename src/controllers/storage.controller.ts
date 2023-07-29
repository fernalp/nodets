import { Request, Response } from "express";
import { RequestExt } from "../interface/req-ext.interface";
import { Storage } from "../interface/storage.interface";
import { registerUpload } from "../services/storage.service";
import { handleHttp } from "../helpers/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        const id = "";

        console.log(user);
        console.log(user);
        if (!user) {
            handleHttp(res, "Error Comunicarse con el Administrador")
        }
        else {
            const dataToRegister: Storage = {
                fileName: `${file?.filename}`,
                idUser: `${user.id}`,
                path: `${file?.path}`,
            };
            const response = await registerUpload(dataToRegister);
            res.send(response);
        }
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
};

export { getFile };