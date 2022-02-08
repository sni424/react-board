import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import 'moment/locale/ko';
import "../css/setview.css"

function Setview(props) {

    const navigate = useNavigate();
    const writeTitle = useRef(null);
    const newcontent = useRef(null);
    const { link_id } = useParams();

    function addTitle(event) {
        event.preventDefault();
        fetch(`http://localhost:3001/titles/${link_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: writeTitle.current.value,
                contents: newcontent.current.value,
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료되었습니다.");
                navigate(`/${link_id}`);
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
            </form>
            <button className="submit-button" onClick={returnPage}>뒤로가기</button><br></br>
        </div>
    );
};

export default Setview;