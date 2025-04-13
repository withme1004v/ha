import React from 'react';
import AddFormComponent from "@/components/todo/addFormComponent";

function TodoAddPage() {
    return (
        <div>
            <div className={'text-4xl'}>Todo Add Page</div>

            <AddFormComponent />
        </div>
    );
}

export default TodoAddPage;