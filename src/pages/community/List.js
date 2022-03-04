import React, { useState } from "react";
import BoardList from "components/Board/List";

function CommunityList() {

    const boardUrl = 'http://localhost:8000/boards';

    return (
        <BoardList boardUrl={boardUrl} />
    );
};

export default CommunityList;