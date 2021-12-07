import React from "react";

import {
    NavItem,
    NavMenu,
    NavStart,
    Icon
} from "../components/Navbar";

function Navbar() {
    return(
        <NavStart>
            <NavMenu>
                <NavItem to="/">
                    <Icon icon="home"/>
                </NavItem>
                <NavItem to="/">
                    <Icon icon="info"/>
                </NavItem>
            </NavMenu>
        </NavStart>
    )
}
export default Navbar;
