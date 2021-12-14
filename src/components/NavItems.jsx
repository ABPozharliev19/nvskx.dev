import {
    NavItem,
    NavText,
} from "./Navbar";
import React from "react";

export const NavItems = () => {
    const url = window.location.pathname;

    return (
        <>
            <NavItem link="/" >
                <NavText isActive={url === "/"}> Home </NavText>
            </NavItem>
            <NavItem link="/projects">
                <NavText isActive={url==="/projects"}> Projects </NavText>
            </NavItem>
            <NavItem link="/achievements">
                <NavText isActive={url==="/achievements"}> Achievements </NavText>
            </NavItem>
            <NavItem link="/links" >
                <NavText isActive={url==="/links"}> Links </NavText>
            </NavItem>
        </>
    )
};
