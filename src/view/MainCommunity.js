/*eslint-disable */
import React from "react";
import { Route, Routes, Link, Switch } from "react-router-dom";
import "../css/maincommunity.css"
import Second_logo from "../img/second-logo.png"
import Write from "./Write";

function MainCommunity() {
    return (
        <div className="full">
            <div className="firstdiv">
                <h4>커뮤니티</h4>
                <Link to="/write">
                    <button>
                        <i className="fa fa-pencil">
                        </i>
                        새 글 쓰기
                    </button>
                </Link>
            </div>
            <div className="seconddiv">
                <ul className="ul-tag">
                    <li><a href="#">최신순</a></li>
                    <li><a href="#">추천순</a></li>
                    <li><a href="#">댓글순</a></li>
                    <li><a href="#">스크랩순</a></li>
                    <li><a href="#">조회순</a></li>
                </ul>
                <div>
                    <input></input>
                    <span className="input-group-btn">
                        <button><i className="fa fa-search"></i></button>
                    </span>
                </div>
            </div>
            <div className="thirddiv">
                <ul className="third-ul">
                    <Newli></Newli>
                    <Newli></Newli>
                </ul>
            </div>
            <div className="lastdiv">
                <ul className="last-ul">
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                    <Newli></Newli>
                </ul>
            </div>
        </div>
    );
};

function Newli() {
    return (
        <>
            <li>
                <div className="first-notice">
                    <div>
                        <span>#1151540</span>
                        <a href="#">공지사항</a>
                    </div>
                    <h5>[okky] Clone Coding 어렵지 않아요~!</h5>
                </div>
                <div className="second-notice">
                    <ul className="second-notice-ul">
                        <li><i className="item-icon fa fa-comment"></i>1</li>
                        <li><i className="item-icon fa fa-thumbs-up"></i>5</li>
                        <li><i className="item-icon fa fa-eye"></i>1k</li>
                    </ul>
                </div>
                <div className="third-notice">
                    <a><img src={Second_logo} alt="profile_img"></img></a>
                    <div className="name-like">
                        <div className="name-like-first">
                            <a>OKKY</a>
                        </div>
                        <h4>2022-02-03 08:24:20</h4>
                    </div>
                </div>
            </li>
        </>
    );
};

export default MainCommunity;