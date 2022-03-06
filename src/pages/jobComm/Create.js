import React from "react";
import BoardCreate from "components/Board/Create";

function JobCreate() {

    const createLink = 'http://localhost:8000/jobBoards';
    const preUrl = "/jobBoard";

    return (
        <BoardCreate
            createLink={createLink}
            preUrl={preUrl} />
    );
};


export default JobCreate;