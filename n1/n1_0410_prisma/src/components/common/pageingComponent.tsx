

import React from 'react';
import {makePageDate} from "@/utils/pageDataUtil";
import Link from "next/link";
import {PagingInfo} from "../../../types/global";


function PagingComponent({page,size,total, dest}: {page: number, size: number, total: number, dest:string}) {

    const pageInfo:PagingInfo =  makePageDate(page,size,total);

    const {prev, start,  pageNums,next,end} = pageInfo;

    return (
        <div className='flex justify-center items-center w-full '>

            <ul className='flex rounded-lg'>
                {prev && <li key={start-1} className='m-2 p-2 bg-gray-100 rounded-md'>Prev</li> }

                {pageNums.map( (pageNum, i) =>
                    <li className='m-2 p-2 bg-gray-100 rounded-md' key={i}>
                        <Link href={`${dest}?page=${pageNum}&size=${size}`}>{pageNum}</Link>
                    </li>
                )}

                {next && <li key={end + 1} className='m-2 p-2 bg-gray-100 rounded-md'>Next</li> }
            </ul>

        </div>
    );
}

export default PagingComponent;