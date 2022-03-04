import React, { useState } from "react";
import BoardCreate from "components/Board/Create";
import axios from "axios";

function ComunityCreate() {

    const urlLink = 'http://localhost:8000/studyboards';

    return (
        <BoardCreate urlLink={urlLink}></BoardCreate>
    );
};


export default ComunityCreate;