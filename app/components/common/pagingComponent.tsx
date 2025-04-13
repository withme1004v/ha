import { NavLink } from "react-router";


function PagingComponent( {pageNumList, prev, next, prevPage, nextPage, current}:PageResponse<unknown>) {

    return (
        <div className="justify-items-center">
            <ul className="flex">

                {prev &&
                    <NavLink to={`../list?page=${prevPage}`}>
                        <li key={prevPage} className="p-1 m-1 bg-blue-400 text-white">
                            Prev
                        </li>
                    </NavLink>}


                {pageNumList.map( (page, idx) =>
                    <NavLink to={`../list?page=${page}`}  key={idx}>
                        <li className={`p-1 m-1 w-10 text-center bg-blue-400 ${current != page ? "text-white" : "text-black"}`}>
                            {page}
                        </li>
                    </NavLink>
                )}

                {next &&
                    <NavLink to={`../list?page=${nextPage}`}>
                        <li key={nextPage} className="p-1 m-1 bg-blue-400 text-white">
                            Next
                        </li>
                    </NavLink>}

            </ul>
        </div>
    )

}

export default PagingComponent;