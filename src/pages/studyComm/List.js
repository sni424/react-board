import React, { useState } from "react";
import BoardList from "components/Board/List";

function CommunityList() {

    const boardUrl = 'http://localhost:8000/studyboards';

    return (
        <BoardList boardUrl={boardUrl}></BoardList>
    );
};

export default CommunityList;