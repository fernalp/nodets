import { UserModel } from "../models/user";
import { User } from "../types/user.interface";
import { encryptPassword, verifiedPassword } from '../helpers/bcrypt.handle';
import { Auth } from "../types/auth.interface";
import { generateToken } from "../helpers/jwt.handle";

export const createUser = async (user: User) => {
    const checkIs = await UserModel.findOne({ email: user.email });
    if (checkIs) {
        return "Email already exists";
    }
    const passwordHash = await encryptPassword(user.password);
    const newUser = await UserModel.create({
        ...user,
        password: passwordHash,
    });
    return newUser;
}

export const loginUser = async (authUser: Auth) => {
    const chekIs = await UserModel.findOne({ email: authUser.email });
    if (!chekIs) {
        return "User Invalid"
    }
    const loginIsCorrect = verifiedPassword(authUser.password, chekIs.password);

    if (!loginIsCorrect) {
        return "Password Invalid";
    }

    const token = generateToken(chekIs.email);

    const data = {
        token,
        user: chekIs
    }

    return data;
}