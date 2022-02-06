import React, { useState, useEffect } from "react";
import Data from "../db/data.json"
import moment from 'moment';
import 'moment/locale/ko';
import "../css/Write.css"

function Write() {

    let nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const [writeTitle, setWriteTitle] = useState("");
    const [content, setContent] = useState("");

    function changeTitle(e) {
        setWriteTitle(e.target.value);
    };

    function changeContents(e) {
        setContent(e.target.value);
    };

    function addTitle(event) {
        event.preventDefault();
        Data.titles.push({
            id: nowTime,
            title: writeTitle,
            contents: content,
        })
        console.log(Data);
    }

    return (
        <div className="main-div">
            <h1>Movie Review</h1>
            <h3>제목</h3>
            <form>
                <div className='form-wrapper'>
                    <input value={writeTitle} className="title-input" type='text' placeholder='제목'
                        onChange={changeTitle} />
                    <h3>내용</h3>
                    <textarea className="text-area" placeholder='내용' onChange={changeContents}></textarea>
                </div>
                <button className="submit-button" type="submit" onClick={addTitle}>입력</button>
                <button className="submit-button">뒤로가기</button>
            </form>
        </div>
    );
};

export default Write;