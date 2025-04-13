'use server'



import prisma from "../../../../lib/prisma";

export async function createTodo(formData: FormData) {

    console.log(formData);

    const title = formData.get('title') as string;
    const writer = formData.get('writer') as string;
    const due_date = formData.get('due_date') as string;

    console.log("values: ", title, writer, due_date);
    // 2초 대기
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = await prisma.tbl_todo.create(
        {
            data: {title,writer,due_date: new Date(due_date),complete:false}
        }
    )

    console.log(result)

    // 아무 결과나 반환
    return { status: 'ok', message: 'Created!' };

}