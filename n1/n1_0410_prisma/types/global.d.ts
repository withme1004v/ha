
export interface Todo {
    tno: number;
    complete: boolean;
    due_date: Date | null;
    title: string | null;
    writer: string | null;
}

export interface PagingInfo {

    page:number;
    size:number;
    total:number;
    end:number;
    start: number;
    prev: boolean;
    next: boolean;
    pageNums: number[]

}