import React from 'react';


import { Metadata } from "next";
import {getNumber} from "@/utils/pageDataUtil";
import prisma from "../../../../lib/prisma";
import ListComponent from "@/components/todo/listComponent";
import PagingComponent from "@/components/common/pageingComponent";


export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Todo List | MyApp",
    description: "View your list of todos and manage your tasks easily.",
    keywords: ["todo", "task list", "productivity", "next.js"],
    openGraph: {
        title: "Todo List - MyApp",
        description: "Check your to-do items and stay organized.",
        url: "https://yourdomain.com/todo/list",
        type: "website",
    },
};

export interface PageProps {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function TodoListPage({searchParams}: PageProps)  {

    const query = await searchParams

    const pageNumber = getNumber(query?.page , 1)
    const sizeNumber = getNumber(query?.size,  10)

    const [allTodos, total]  = await Promise.all([

        await prisma.tbl_todo.findMany(
            {
                skip: (pageNumber - 1) * sizeNumber,
                take: sizeNumber,
                orderBy: {tno: "desc"}
            }),
        prisma.tbl_todo.count()
    ])


    console.log(allTodos, total)

    return (
        <div>

            <div className={'text-4xl'}>Todo List Page</div>

            <ListComponent todos={allTodos}/>

            <PagingComponent page={pageNumber} size={sizeNumber} total={total} dest={'/todo/list'}/>

        </div>
    );
}

export default TodoListPage;