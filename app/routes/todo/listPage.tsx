import React from 'react';
import ListComponent from "~/components/todo/listComponent";

function ListPage() {
    return (
        <div>
            <div className={'text-4xl'}>List Page</div>

            <ListComponent></ListComponent>
        </div>
    );
}

export default ListPage;