import React, { useState } from "react";
import Logo from "../img/okjsp_logo.png"
import "../css/Leftheader.css"
import Community from "./Community";

function Leftheader(props) {

    return (
        <div className='leftbar-ca leftbar'>
            <div className='logo'><a href='/'><img src={Logo} alt='logo'></img></a></div>
            <div className='search'><a href='#'><i class="fa fa-search"></i></a></div>
            <div className='second-icon'>
                <div className='login-icon'><a href='#'><i class="fa fa-sign-in"></i></a></div>
                <div className='signin-icon'><a href='#'><i class="fa fa-user"></i></a></div>
            </div>
            <div>
                <ul className='ulfirst-tag'>
                    <li><a><i class="nav-icon fa fa-database"></i></a></li>
                    <li><a><i class="nav-icon nav-icon fa fa-code"></i></a></li>
                    <li><a onClick={props.showCommnutiy}><i class="nav-icon fa fa-comments"></i></a></li>
                    <li><a><i class="nav-icon fa fa-quote-left"></i></a></li>
                    <li><a><i class="nav-icon fa fa-group"></i></a></li>
                </ul>
            </div>
            <div className='github-logo'>
                <a href='#'><i class="fa fa-github"></i></a>
            </div>
        </div>
    );
};

export default Leftheader;