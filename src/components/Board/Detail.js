import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Creply from "../../components/reply/Creply";
import styled from "styled-components";
import Profile from "../../assets/images/profile.png"
import axios from "axios";
import NavMain from "../../components/navMain/NavMain";
import EditFooter from '../../components/reply/EditFooter';

function BoardDetail({ boardUrl, replyUrl }) {

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

    let { setid } = useParams();
    let [put, setPut] = useState(`/putndelete/${setid}`);
    const navi = useNavigate();

    function removeText() {
        if (newDatas.length > 0) {
            if (window.confirm("삭제 하시겠습니까?")) {
                axios(
                    {
                        method: 'DELETE',
                        url: `${boardUrl}/${parseInt(setid)}`,
                    }).then(() => {
                        alert("삭제되었습니다.");
                        navi('/Board');
                    }).catch(err => {
                        return alert(err.message);
                    })
            }
        }
    }
    function pre() {
        navi(-1);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <MainStyle>
                <div>
                    <NavMain />
                </div>
                <div>
                    <BackDiv>
                        <HeaderDiv>
                            <FirstDiv>
                                <SecondDiv>
                                    {newDatas.length > 0 &&
                                        <HeaderH1>{newDatas.find(a => parseInt(a.id) === parseInt(setid)).title}</HeaderH1>}
                                </SecondDiv>
                                <ThirdDiv>
                                    <Link to={put}>
                                        <ThirdDivA href="#">Edit</ThirdDivA>
                                    </Link>
                                    <ThirdDivA href="#" onClick={removeText}>Delete</ThirdDivA>
                                    <ThirdDivA href="#" onClick={pre}>Pre</ThirdDivA>
                                </ThirdDiv>
                            </FirstDiv>
                            <IDDiv>
                                <ProfileImg src={Profile}></ProfileImg>
                                <IdPost>
                                    <IdA href="#">sni424</IdA>
                                    <PostPtag>Posted on 2월23일</PostPtag>
                                </IdPost>
                            </IDDiv>
                            <LanguageTag>
                                <LanguageA href="#" background_color={"rgba(0, 0, 0, 0.1)"}>
                                    <SharpSpan color="orange">#</SharpSpan>Java
                                </LanguageA>
                                <LanguageA href="#" background_color="green">
                                    <SharpSpan color="green">#</SharpSpan>JavaScript
                                </LanguageA>
                                <LanguageA href="#" background_color="blue">
                                    <SharpSpan color="blue">#</SharpSpan>Python
                                </LanguageA>
                            </LanguageTag>
                            <>
                                <ContentP>
                                    {newDatas.length > 0 &&
                                        <>{newDatas.find(x => x.id === parseInt(setid)).contents}</>}
                                </ContentP>
                            </>
                            <Hr></Hr>
                            <Creply setid={setid} replyUrl={replyUrl} ></Creply>
                        </HeaderDiv>
                    </BackDiv>
                </div>
            </MainStyle>
            <EditFooter />
        </>
    );
};
const MainStyle = styled.div`
  display: flex;
  width: 1248px;
  margin: 0 auto;
`;

const BackDiv = styled.div`
background-color:#EFEFEF;
display: flex;
align-items: center;
justify-content: center;
padding: 16px;
width: 976px;
`;

const HeaderDiv = styled.div`

background:#ffffff;
padding: 50px;
width: 976px;
`;
const FirstDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const SecondDiv = styled.div`
display: flex;
`
const IDDiv = styled.div`
display:flex;
`;
const ProfileImg = styled.img`
border-radius: 70%;
width: 40px;
height: 40px;
`;
const IdPost = styled.div`
padding-left: 10px;
`;
const IdA = styled.a`
color: #404040;
font-size: 16px;
font-weight: 700;
&:hover {
    color: blue;
  }
`;
const PostPtag = styled.p`
color: #717171;
font-size: 12px;
margin-top: 2px;
font-weight: 500;
`;

const ThirdDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background: #F59E0B1A;
padding : 4px;
border: 1px solid #F59E0B1A;
border-radius:5px;
`;
const ThirdDivA = styled.a`
color: #3d3d3d;
font-size: 14px;
padding: 4px 8px;
&:hover {
    background-color: white;
    color: black;
  }
`;
const HeaderH1 = styled.h1`
color:#171717;
font-weight: 600;
margin-bottom: 8px;
`;
const LanguageTag = styled.div`
display: flex;
align-items: center;
justify-content: start;
`;
const LanguageA = styled.a`
padding: 4px 8px;
font-size: 16px;
&:hover {
    background-color: ${props => props.background_color};
    border-radius: 3px;
    opacity: 0.7;
  }
`;
const SharpSpan = styled.span`
color:${props => props.color}
`;
const ContentP = styled.p`
font-weight: 500;
`;
const Hr = styled.hr`
width:100%;
`;

export default BoardDetail;

