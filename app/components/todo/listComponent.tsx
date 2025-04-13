import {Link, useSearchParams} from "react-router";
import {getNumber} from "~/util/numUtil";
import {useEffect, useState} from "react";
import {todoList} from "~/api/todoAPI";
import PagingComponent from "~/components/common/pagingComponent";


function ListComponent() {

    const [searchParams] = useSearchParams()

    // 문자열로 들어오므로 숫자로 파싱
    const page = getNumber(searchParams.get('page'), 1)
    const size = getNumber(searchParams.get('size'), 10)

    const [refresh, setRefresh] = useState(false)

    const [pageResult, setPageResult] = useState<PageResponse<TodoList>>()

    useEffect(() => {

        console.log("---------------------")

        todoList(String(page), String(size)).then(result => {

            console.log(result)
            setPageResult(result)

        });


    }, [page, size])


    return (
        <>
            {pageResult && (
                <div>
                    <div>Result 존재함</div>


                    <ul className="space-y-4">
                        {pageResult.dtoList.map(todo => (
                            <li
                                key={todo.tno}
                                className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md bg-white transition-shadow"
                            >
                                <div className="flex justify-between items-center">
                                    <Link
                                        to={`/todo/read/${todo.tno}`}
                                        className="text-lg font-semibold text-blue-600 hover:underline"
                                    >
                                        {todo.title}
                                    </Link>
                                    <span
                                        className={`text-sm font-medium ${todo.complete ? 'text-green-600' : 'text-red-600'}`}>
                {todo.complete ? '완료' : '미완료'}
              </span>
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                    <p>작성자: {todo.writer}</p>
                                    <p>번호: {todo.tno}</p>
                                </div>
                            </li>
                        ))}
                    </ul>


                    <PagingComponent {...pageResult} />

                </div>
            )}
        </>
    )
}

export default ListComponent