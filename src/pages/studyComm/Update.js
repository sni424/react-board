import React, { useState } from "react";
import BoardUpdate from "components/Board/Update";

function CommunityUpdate() {

    const boardUrl = 'http://localhost:8000/studyboards';

    return (
        <BoardUpdate boardUrl={boardUrl} />
    );
};

export default CommunityUpdate;