import React from "react";
import BoardDetail from "components/Board/Detail";

function CommunityDetail() {

    const boardUrl = 'http://localhost:8000/studyboards';
    const replyUrl = 'http://localhost:8000/studyreply';

    return (
        <>
            <BoardDetail boardUrl={boardUrl} replyUrl={replyUrl} />
        </>
    )
};

export default CommunityDetail;