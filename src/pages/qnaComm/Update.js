import React from "react";
import BoardUpdate from "components/Board/Update";

function QnAUpdate() {

    const boardUrl = 'http://localhost:8000/qnaBoards';
    const preUrl = 'qnaBoard/detail';
    return (
        <BoardUpdate
            boardUrl={boardUrl}
            preUrl={preUrl}
        />
    );
};

export default QnAUpdate;