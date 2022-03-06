import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import postPic from '../../assets/images/2h6crhh836sfyu4dai13.webp';
import SortTaps from "./SortTaps";
import Login from './Login';
import PostBoard from "./PostBoard";

const MainMenu = () => {

    const detailUrl = 'Board';
    const boardUrl = "http://localhost:8000/boards";
    const studyDetailUrl = 'studyBoard';
    const studyUrl = "http://localhost:8000/studyBoards";
    const jobDetailUrl = 'jobBoard';
    const jobUrl = "http://localhost:8000/jobBoards";
    const qnaDetailUrl = 'qnaBoard';
    const qnaUrl = "http://localhost:8000/qnaBoards";


    return (
        <>
            <InnerBox>
                {/* Sort Tap section */}
                <MainHeader>
                    <SortTaps />
                </MainHeader>
                <PostSection>
                    <PostImg></PostImg>
                </PostSection>
                {/* First Post with Pic */}
                <PostBoard detailUrl={detailUrl} boardUrl={boardUrl} />
                {/* TEST: Second Post without pic */}
                <PostBoard detailUrl={studyDetailUrl} boardUrl={studyUrl} />
                {/* Login */}
                <LoginSection>
                    <Login />
                </LoginSection>
                {/* TEST */}
                <PostBoard detailUrl={jobDetailUrl} boardUrl={jobUrl} />
                <PostBoard detailUrl={qnaDetailUrl} boardUrl={qnaUrl} />
            </InnerBox>
        </>
    );
};
const InnerBox = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px 0;
`;
const MainHeader = styled.header`
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
`;
const PostSection = styled.div`
    background: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
    margin: 0 0 0.5rem;
    position: relative;
    border-radius: 0.375rem;
`;
const LoginSection = styled.div`
    padding: 32px;
    margin-bottom: 12px;
`;
const PostImg = styled.img.attrs({
    src: `${postPic}`
})`
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
`;

export default MainMenu;

// -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//     Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
//     'Segoe UI Symbol'


// .crayons-btn--s {
//     --vertical-padding: var(--su-1); 0.25rem
//     --horizontal-padding: var(--su-3);0.75rem
//     --font-size: var(--fs-s);
//     --with-icon-padding: var(--su-2);
//     --icon-margin: var(--su-1);
//     font-weight: normal;