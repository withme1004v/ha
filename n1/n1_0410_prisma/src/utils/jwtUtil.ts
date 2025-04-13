import { SignJWT, jwtVerify } from "jose";

const SECRET_KEY = process.env.JWT_SECRET!;
const encoder = new TextEncoder();
const secret = encoder.encode(SECRET_KEY);

export interface User {
    uid:string,
    email:string,
    uname:string,
    exp? : number
}

/** JWT 생성 */
export async function createJWT(payload: any, expiresIn = "1h") {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime(expiresIn)
        .sign(secret);
}

/** JWT 검증 */
export async function verifyJWT(token: string) {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload as unknown as User;
    } catch (error) {
        return null;
    }
}