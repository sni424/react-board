import React from "react";
import BoardDetail from "components/Board/Detail";

function CommunityDetail() {

    const boardUrl = 'http://localhost:8000/boards';
    const replyUrl = 'http://localhost:8000/boardsreply';

    return (
        <BoardDetail boardUrl={boardUrl} replyUrl={replyUrl}></BoardDetail>
    );
};

export default CommunityDetail;