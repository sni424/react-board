import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Readview(props) {

    let navigate = useNavigate();
    const [removeId, setremoveId] = useState([props.Data]);
    let { link_id } = useParams()
    let [index, setIndex] = useState(`/setview${link_id}`);

    function removeText() {
        if (props.Data.length > 0) {
            if (window.confirm("정말 삭제 하시겠습니까?")) {
                console.log(link_id);
                fetch(`http://localhost:3001/titles/${parseInt(link_id)}`, {
                    method: "DELETE",
                }).then(res => {
                    if (res.ok) {
                        alert("삭제가 완료되었습니다.");
                        setremoveId({ id: 0 });
                        navigate("/");
                    }
                })
            }
        }
    }

    return (
        <div>
            <h2>제목</h2>
            {props.Data.length > 0 &&
                <h3>{props.Data.find(x => x.id === parseInt(link_id)).title}</h3>}
            <div className='form-wrapper'>
                <h3>내용</h3>
                <div>            {props.Data.length > 0 &&
                    <h3>{props.Data.find(x => x.id === parseInt(link_id)).contents}</h3>}</div>
            </div>
            <Link to={index}>
                <button className="submit-button" type="submit">수정</button>
            </Link>
            <button className="submit-button" type="submit" onClick={removeText}>삭제</button><br></br>
        </div>
    );
};

export default Readview