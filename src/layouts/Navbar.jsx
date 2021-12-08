import React, {
} from "react";

import {
    NavStart,
    NavbarEnd,
    NavItem
} from "../components/Navbar";

import { NavbarContext} from "../App";

function Navbar() {
    return (
        <NavbarContext.Consumer>
            {context => {
                return (
                    <NavStart isActive={context.navbarIsActive} setActive={context.updateNavbarActive}>
                        <NavbarEnd>
                            <NavItem>
                                <span> Home </span>
                            </NavItem>
                            <NavItem>
                                <span> Projects </span>
                            </NavItem>
                            <NavItem>
                                <span> Achievements </span>
                            </NavItem>
                            <NavItem>
                                <span> Links </span>
                            </NavItem>
                        </NavbarEnd>
                    </NavStart>
                )
            }}

        </NavbarContext.Consumer>
    )
}
export default Navbar;
