import { NavLink, withRouter } from "react-router-dom";
import React, { Component } from "react";



export function Header(props) {
const img = require ('../assets/img/logo.png')
    return (
        <div className="main-header flex sb align-center">
            <div className="left-nav">
                <div className="logo"><img src={img}/></div>
                {/* <NavLink className="link" to="/">HOME</NavLink> */}
                {/* <NavLink to="/item">ITEMS</NavLink> */}
            </div>
            <div className="right-nav">
                <NavLink to="/favorite">Favorite</NavLink>
                <NavLink to="/item">Weather</NavLink>
            </div>
        </div>
    )
}
