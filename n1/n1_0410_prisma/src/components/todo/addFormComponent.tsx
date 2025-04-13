'use client'

import React, {useActionState} from 'react';
import {useRouter} from "next/navigation";
import {createTodo} from "@/app/todo/actions/todoActions";



export interface State {
    status: string;
    message: string
}



const initialState: State = {status: '', message: ''};

function AddFormComponent() {

    const router = useRouter();

    const actionFn = async (state:State, formData:FormData): Promise<State> => {

        const result = await createTodo(formData)

        return result

    }

    const [state, action, isPending] = useActionState( actionFn, initialState  );

    return (
        <div>
            <form action={action} className="space-y-4">

                <div>
                    <input className="m-2 w-full p-2 border rounded" name="title" type="text" required></input>
                </div>
                <div>
                    <input className="m-2 w-full p-2 border rounded" name="writer" type="text" required></input>
                </div>
                <div>
                    <input className="m-2 w-full p-2 border rounded" name="due_date" type="date" required></input>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        {isPending ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

            </form>

            {state.message && (
                <div
                    className={`mt-4 p-4 rounded ${
                        state.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                >
                    {state.message}

                    <button onClick={() => {
                        router.push('/todo/list')
                    }}>CLICK</button>
                </div>
            )}

        </div>
    );
}

export default AddFormComponent;