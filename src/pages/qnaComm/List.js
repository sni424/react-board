import React from "react";
import BoardList from "components/Board/List";

function QnAList() {

    const boardUrl = 'http://localhost:8000/qnaBoards';
    const detailUrl = 'qnaBoard';
    const createUrl = 'qnaWrite';

    return (
        <BoardList
            boardUrl={boardUrl}
            detailUrl={detailUrl}
            createUrl={createUrl} />
    );
};

export default QnAList;