'use client'

import React, {useActionState, useEffect} from 'react';
import {loginAction} from "@/app/user/actions/userActions";

import {useRouter} from "next/navigation";


const initialState = { success: false, error: null };

function LoginForm() {

    const [state, formAction, isPending] = useActionState(loginAction, initialState)

    const router = useRouter();

    useEffect(() => {

        console.log(state)

        if (state.success) {
            router.push('/todo/list'); // 원하는 페이지로 이동
        }
    }, [state.success, router]);

    return (
        <div>

            {isPending && <div>Loading.....................</div>}

            <div> Login Page</div>


            <form action={formAction}>
                <div>
                    <input type={'text'} name={'uid'} className={'m-1 border-1'}/>
                </div>
                <div>
                    <input type={'text'} name={'upw'} className={'m-1 border-1'}/>
                </div>
                <div>
                    <button type={"submit"} className={'m-1 border-1'}>
                        {isPending ? '로그인 중...' : '로그인'}
                    </button>
                </div>

                {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
                {state.success && <p style={{ color: 'green' }}>로그인 성공!</p>}
            </form>


        </div>
    );
}

export default LoginForm;