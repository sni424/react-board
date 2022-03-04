import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ReplyShow from "./ReplyShow";

function Creply({ setid, replyUrl }) {

  const [checkUseEffect, setCheckUseEffect] = useState(true);
  const [newConmment, setNewConmment] = useState("");
  const [newReply, setNewReply] = useState([]);
  const fetchTasks = async () => {
    const res = await axios(replyUrl)
    const newData = await res.data
    return setNewReply(newData)
  }

  function onChange(e) {
    const { value } = e.target;
    setNewConmment(value);
  }

  function CreateReply(event) {
    event.preventDefault();
    if (newConmment === "") {
      return alert("댓글의 내용을 적어주세요.")
    }
    axios({
      method: "POST",
      url: replyUrl,
      data: {
        sameId: parseInt(setid),
        comment: newConmment,
        like: 0,
      }
    })
      .then(res => {
        setNewReply([...newReply, res]);
        setCheckUseEffect(!checkUseEffect);
        setNewConmment("");
        alert("생성이 완료되었습니다.");
      })
      .catch(err => {
        return alert(err.message);
      })
  };
  const newArray = newReply.filter(a => a.sameId === parseInt(setid));//댓글 갯수

  useEffect(() => {
    fetchTasks();
  }, [checkUseEffect])

  return (
    <>
      <CommentSection>
        <div>
          <DiscussionHeader>
            <div>

              <SubjectH2>
                Comments ({newReply
                  ? newArray.length
                  : 0})
              </SubjectH2>
            </div>
          </DiscussionHeader>
          {/* 댓글작성부분 */}
          <form>
            <CommentDiv>
              <TextareaDiv>
                <CommentTextarea
                  type="text"
                  placeholder="댓글을 입력해 주세요."
                  value={newConmment}
                  onChange={onChange}
                >
                </CommentTextarea>
              </TextareaDiv>
            </CommentDiv>
            <div>
              <CommentBtnDiv>
                {newConmment === '' ? (
                  <>
                    <SubmitBtnDis type="button" disabled>등록</SubmitBtnDis>
                  </>
                ) : (
                  <>
                    <SubmitBtn type="submit" value="등록" onClick={CreateReply}></SubmitBtn>
                  </>
                )}
              </CommentBtnDiv>
            </div>
          </form>
          {newReply.length > 0 &&
            newReply.map((a, i) => {
              return <ReplyShow
                setNewReply={setNewReply}
                newReply={newReply}
                setid={setid}
                key={i}
                index={i}
                sameId={a.sameId}
                comment={a.comment}
                newid={a.id}
                replyUrl={replyUrl}
                setCheckUseEffect={setCheckUseEffect}
                checkUseEffect={checkUseEffect}
              >
              </ReplyShow>
            })
          }
        </div>
      </CommentSection>
    </>
  );
};

const CommentSection = styled.section`
    background: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
    margin: 0 0 16px;
    padding: 32px 48px;
    position: relative;
    border-radius: 0.375rem;
`;
const DiscussionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const SubjectH2 = styled.h2`
  font-size: 24px;
  color: #242424;
  font-weight: 700;
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
const SubmitBtnDis = styled.button`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  border-radius: 0.375rem;
  opacity: 0.6;
    cursor: not-allowed;
`;
const SubmitBtn = styled.input`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  border-radius: 0.375rem;
  border: 0;
  outline: 0;
  &:hover {
    background-color: #2f3ab2;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #f9f9f9;
  }
`;
export default Creply;