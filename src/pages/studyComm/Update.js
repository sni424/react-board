import React from "react";
import BoardUpdate from "components/Board/Update";

function StudyUpdate() {

    const boardUrl = 'http://localhost:8000/studyBoards';
    const preUrl = 'studyBoard/detail';
    return (
        <BoardUpdate
            boardUrl={boardUrl}
            preUrl={preUrl}
        />
    );
};

export default StudyUpdate;