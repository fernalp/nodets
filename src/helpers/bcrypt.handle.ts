import { compare, hash } from "bcryptjs"

export const encryptPassword = async (password: string): Promise<string> => {
    const passwordHash = await hash(password, 10);
    return passwordHash;
};

export const verifiedPassword = async (password: string, passwordHash: string) => {
    const isCorrect = await compare(password, passwordHash);
    return isCorrect;
}
