import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import styled from 'styled-components';
import axios from 'axios';

function PostBoard({ boardUrl, detailUrl }) {
    const [newDatas, setNewDatas] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios(boardUrl)
            const Data = await res.data;
            return setNewDatas(Data)
        }
        catch (err) {
            console.log(err.message);
        }
    }
    const boardDate = newDatas.slice(0, 5);
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            {newDatas.length > 1 &&
                boardDate.map((a, i) => {
                    return <PostSection>
                        <Posts title={a.title} index={a.id} detailUrl={detailUrl} />
                    </PostSection>
                })}
        </>
    );
};

const PostSection = styled.div`
    background: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
    margin: 0 0 0.5rem;
    position: relative;
    border-radius: 0.375rem;
`;

export default PostBoard;