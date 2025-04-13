import React from 'react';
import {Todo} from "../../../types/global";
import Link from "next/link";


function ListComponent( {todos}: {todos:Todo[]}) {
    return (
        <div>
            <ul>
            {todos.map( todo => (
                <li key={todo.tno} className="border-1 m-2 p-2 list-none">
                    <Link href={`/todo/read/${todo.tno}`}>
                        <div>
                            <div>{todo.tno}</div>
                            <div>{todo.title} - {todo.writer}</div>
                            <div>{todo.due_date?.toLocaleDateString()}</div>
                        </div>
                    </Link>
                </li>
            ))}
            </ul>



        </div>
    );
}

export default ListComponent;