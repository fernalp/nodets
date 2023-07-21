import { sign, verify, Secret } from 'jsonwebtoken';
const JWT_SECRET: Secret = `${process.env.JWT_SECRET}`;




export const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "1h", // 1 hour token expiration time
    });
    return jwt;
}

export const verifyToken = (token: string) => {
    const user = verify(token, JWT_SECRET);
    return user;
}


