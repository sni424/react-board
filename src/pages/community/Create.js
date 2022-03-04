import React from "react";
import BoardCreate from "components/Board/Create";

function ComunityCreate() {

    const boardUrl = 'http://localhost:8000/boards';

    return (
        <BoardCreate boardUrl={boardUrl}></BoardCreate>
    );
};


export default ComunityCreate;