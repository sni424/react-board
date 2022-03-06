import React from "react";
import BoardList from "components/Board/List";

function CommunityList() {

    const boardUrl = 'http://localhost:8000/boards';
    const detailUrl = 'Board';
    const createUrl = 'write';

    return (
        <BoardList
            boardUrl={boardUrl}
            detailUrl={detailUrl}
            createUrl={createUrl} />
    );
};

export default CommunityList;