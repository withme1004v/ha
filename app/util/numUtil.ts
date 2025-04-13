
export function getNumber( str: string| null | string[] | number | undefined , defaultNum: number ): number {

    if(!str){
        return defaultNum;
    }

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