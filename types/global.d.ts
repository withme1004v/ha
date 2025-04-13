

interface TodoList {

  tno: number,
  title: string,
  writer: string,
  complete: boolean,
  dueData: string

}


interface TodoAdd {
  title: string,
  writer: string,
  dueDate: string 
}

interface TodoAddResult {
  TNO: number
}

interface PageResponse<T> {

  dtoList: T[],
  prev: boolean,
  next: boolean,
  prevPage: number,
  nextPage: number,
  totalPage: number,
  totalCount: number,
  pageNumList: number[],
  current: number
}