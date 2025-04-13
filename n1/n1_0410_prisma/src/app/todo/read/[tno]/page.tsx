import React from 'react';
import {Todo} from "../../../../../types/global";
import prisma from "../../../../../lib/prisma";
import ReadComponent from "@/components/todo/readComponent";


export async function generateStaticParams(): Promise<any> {
    const todos:Todo[] | null = await prisma.tbl_todo.findMany(
        {where: {tno: { gt: 0}} }
    )

    return todos?.map( (todo:Todo) => ({tno:String(todo.tno)}))
}


async function TodoReadPage({params}:{params:Promise<any>}) {

    const prop = await params

    console.log("===================================")
    console.log( prop );


    const tno: number | string = prop.tno

    const todo:Todo | null = await prisma.tbl_todo.findUnique({where: {tno: Number(tno)}})


    return (
        <div>
            <div className={'text-4xl'}>Todo Read</div>

            {todo && <ReadComponent todo={todo}/>}

        </div>
    );
}

export default TodoReadPage;