import React from "react";
import BoardDetail from "components/Board/Detail";

function StudyDetail() {

    const boardUrl = 'http://localhost:8000/studyBoards';
    const replyUrl = 'http://localhost:8000/studyReply';
    const updateUrl = 'studyUpdate';
    const preUrl = "/studyBoard";

    return (
        <>
            <BoardDetail
                boardUrl={boardUrl}
                replyUrl={replyUrl}
                updateUrl={updateUrl}
                preUrl={preUrl} />
        </>
    )
};

export default StudyDetail;