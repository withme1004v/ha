import axios from "axios"
// npm install axios

const host = "http://localhost:8080/api/todo"

export async function todoAdd ( todo: TodoAdd ): Promise<TodoAddResult> {


  const res = await axios.post(host, todo)

  return res.data

}

export async function todoList ( page: string | null, size: string | null) : Promise<PageResponse<TodoList>> {

  let pageNum = 1
  let sizeNum = 10

  if(page) {
    pageNum = Number(page)
  }

  if(size) {
    sizeNum = Number(size)
  }

  // 1초 대기
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await axios.get(`${host}/list?page=${pageNum}&size=${sizeNum}`)

  return res.data


}