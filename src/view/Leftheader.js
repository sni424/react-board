/*eslint-disable */
import React, { useState } from "react";
import Logo from "../img/okjsp_logo.png"
import "../css/Leftheader.css"

function Leftheader(props) {

    return (
        <div className='leftbar-ca leftbar'>
            <div className='logo'><a href='/'><img src={Logo} alt='logo'></img></a></div>
            <div className='search'><a href='#'><i className="fa fa-search"></i></a></div>
            <div className='second-icon'>
                <div className='login-icon'><a href='#'><i className="fa fa-sign-in"></i></a></div>
                <div className='signin-icon'><a href='#'><i className="fa fa-user"></i></a></div>
            </div>
            <div>
                <ul className='ulfirst-tag'>
                    <li><a><i className="nav-icon fa fa-database"></i></a></li>
                    <li><a><i className="nav-icon nav-icon fa fa-code"></i></a></li>
                    <li><a onClick={props.showCommnutiy}><i className="nav-icon fa fa-comments"></i></a></li>
                    <li><a><i className="nav-icon fa fa-quote-left"></i></a></li>
                    <li><a><i className="nav-icon fa fa-group"></i></a></li>
                </ul>
            </div>
            <div className='github-logo'>
                <a href='#'><i className="fa fa-github"></i></a>
            </div>
        </div>
    );
};

export default Leftheader;