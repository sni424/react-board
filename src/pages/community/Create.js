import React from "react";
import BoardCreate from "components/Board/Create";

function ComunityCreate() {

    const createLink = 'http://localhost:8000/boards';
    const preUrl = "/Board";

    return (
        <BoardCreate
            createLink={createLink}
            preUrl={preUrl} />
    );
};


export default ComunityCreate;