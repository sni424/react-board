import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'
import Profile from "../../assets/images/profile.png"


function EditReply({ replyUrl, replyId, newReply, setEdit, sameId, setCheckUseEffect, checkUseEffect }) {

  console.log(replyId, newReply);

  const [newcontent, setNewContent] = useState("");

  function onChange(e) {
    setNewContent(e.target.value);
  }

  function changeComment() {
    axios({
      method: "PUT",
      url: `${replyUrl}/${replyId}`,
      data: {
        sameId: sameId,
        comment: newcontent,
        like: 0,
      },
    })
    alert("댓글 수정완료.");
    setEdit(false);
    setCheckUseEffect(!checkUseEffect);
  }

  function hideButton() {
    setEdit(false);
  };


  return (
    <>
      <WriteCommentStart>
        <div>
          <UserPic></UserPic>
        </div>
        <CommentWriteDiv>
          <form>
            <CommentDiv>
              <TextareaDiv>
                <CommentTextarea
                  value={newcontent} onChange={onChange}
                >
                </CommentTextarea>
              </TextareaDiv>
            </CommentDiv>
            <div>
              <CommentBtnDiv>
                <SubmitBtn type="submit" value="수정완료" onClick={changeComment}></SubmitBtn>
                <DismissBtn onClick={hideButton}>취소</DismissBtn>
              </CommentBtnDiv>
            </div>
          </form>
        </CommentWriteDiv>
      </WriteCommentStart>
    </>
  );
};
const WriteCommentStart = styled.div`
  display: flex;
`;
const UserPic = styled.img.attrs({
  src: `${Profile}`
})`
  width: 32px;
  height: 32px;
  margin-right: 8px; 
  border-radius: 32px;
  display: inline-block;
  vertical-align: bottom;
`;
const CommentWriteDiv = styled.div`
  width: 100%;
`;
const CommentDiv = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d4d4d4;
  margin-bottom: 12px;
  &:focus-within {
    border-color: #3b49df;
    0 0 0 1px #3b49df;
  }
`;
const TextareaDiv = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
const CommentTextarea = styled.textarea`
  padding: 8px;
  margin: 0;
  outline: none;
  width: -webkit-fill-available;
  box-shadow: none;
  border: none;
  transition: none 0s ease 0s; 
  height: 129px;
  background: transparent;
  &:hover {
    resize: none;
  }
`;
const CommentBtnDiv = styled.div`
  margin-bottom: 16px;
`;
const SubmitBtn = styled.input`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  border: 0;
  outline: 0;
  border-radius: 0.375rem;
  &:hover {
    background-color: #2f3ab2;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #f9f9f9;
  }
`;
const DismissBtn = styled.a`
  color: #3d3d3d;
  font-size: 16px;
  padding: 8px 16px;
  &:hover {
    border-radius: 0.375rem;
    color: #090909;
    background: #00000009;
  }
`;
const LodingImg = styled.div`
margin: 0 auto;
display: table;
`;
export default EditReply;
