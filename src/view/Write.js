import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import 'moment/locale/ko';
import "../css/Write.css"

function Write() {

    const navigate = useNavigate();
    const writeTitle = useRef(null);
    const newcontent = useRef(null);
    const newId = useRef(null);

    function addTitle(event) {
        event.preventDefault();
        fetch(`http://localhost:3001/titles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: parseInt(newId.current.value),
                title: writeTitle.current.value,
                contents: newcontent.current.value,
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료되었습니다.");
                navigate('/');
            }
        })
    }

    function returnPage() {
        navigate(-1);
    }

    return (
        <div className="main-div">
            <h1>Movie Review</h1>
            <h3>제목</h3>
            <form onSubmit={addTitle}>
                <div className='form-wrapper'>
                    <input className="title-input" type='text' placeholder='제목'
                        ref={writeTitle} />
                    <h3>내용</h3>
                    <textarea className="text-area" placeholder='내용' ref={newcontent}></textarea>
                </div>
                <button className="submit-button" type="submit">입력</button>
                <input type="password" placeholder="비밀번호를 입력해주세요" ref={newId}></input>
            </form>
            <button className="submit-button" onClick={returnPage}>뒤로가기</button><br></br>
        </div>
    );
};

export default Write;