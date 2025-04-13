

import React from 'react';
import {Todo} from "../../../types/global";
import Link from "next/link";

function ReadComponent({todo}  : {todo:Todo} ) {
    return (
        <div>
            <div>{todo?.tno}</div>
            <div>{todo?.title}</div>
            <div>{todo?.writer}</div>
            <div>{todo?.due_date?.toLocaleDateString()}</div>

            <div><Link href={`/todo/edit/${todo?.tno}`}>EDIT</Link></div>

        </div>
    );
}

export default ReadComponent;