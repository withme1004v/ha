'use server'

import {createJWT, User, verifyJWT} from "@/utils/jwtUtil";
import {cookies} from "next/headers";


export async function loginAction ( prevState: any, formData:FormData) {

    const uid = formData.get('uid')
    const upw = formData.get('upw')


    const user = {uid, email:"user1@aaa.com", uname: 'User1'}


    // JWT 생성
    const accessToken: string = await createJWT({ uid: user.uid, email: user.email, uname: user.uname }, "10m");
    const refreshToken = await createJWT({ uid: user.uid, email: user.email, uname: user.uname }, "7d");

    // 쿠키에 저장

    const cookieObj = await  cookies()

    cookieObj.set("access-token", accessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60, // 1시간
    });
    cookieObj.set("refresh-token", refreshToken, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7 //7days
    });

    return { success: true, error: null };

}


export async function getUser(): Promise<User | null> {

    const cookieObj = await  cookies()

    const token = cookieObj.get("access-token")?.value;

    if (!token) return null;

    return await verifyJWT(token) ;

}