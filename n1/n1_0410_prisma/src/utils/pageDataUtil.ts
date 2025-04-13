import {PagingInfo} from "../../types/global";


export function getNumber( str: string| string[] | number | undefined , defaultNum: number ): number {

    const parseNum = Number(extractString(str));
    const safeNum = isNaN(parseNum) ? defaultNum : parseNum ;

    return safeNum
}

function extractString(str: string | string[] | number | undefined): string | undefined {
    if (typeof str === 'string') return str;
    if (Array.isArray(str)) return str[0]; // 여러 값 중 첫 번째 사용
    if (typeof str === 'number') return String(str);
    return undefined;
}


export function makePageDate( page: string | number | undefined,
                              size: string | number | undefined,
                              total: number
): PagingInfo {

    const parsedPage = Number(page);
    const parsedSize = Number(size);

    const safePage = isNaN(parsedPage) || parsedPage < 1 ? 1 : parsedPage;
    const safeSize = isNaN(parsedSize) || parsedSize < 1 ? 10 : parsedSize;

    const pageCount = Math.ceil(total / safeSize);

    let end = Math.ceil(safePage / safeSize) * 10;

    const start = end - 9


    if(end > pageCount){
        end = pageCount
    }

    const prev = start !== 1
    const next = end < pageCount


    const pageNums = Array.from({ length: pageCount }).map((_, i) => i+1);

    return {page: safePage, size: safeSize, total, end, start, prev, next, pageNums};

}