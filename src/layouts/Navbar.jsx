import React, {
} from "react";

import {
    NavStart,
    NavItem,
    NavbarEnd,
    NavMenu
} from "../components/Navbar";

import useWindowDimensions from "../hooks/useWindowDimensions";

import { NavbarContext} from "../App";

function Navbar() {

    const { width } = useWindowDimensions();

    return (
        <NavbarContext.Consumer>
            {context => {
                {
                    if (width > 1023) {
                        return (
                            <NavStart isActive={context.navbarIsActive} setActive={context.updateNavbarActive}>
                                <NavbarEnd isActive={context.navbarIsActive}>
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
                    } else {
                        return (
                            <NavStart isActive={context.navbarIsActive} setActive={context.updateNavbarActive}>
                                <NavMenu isActive={context.navbarIsActive}>
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
                                </NavMenu>
                            </NavStart>
                        )
                    }
                }
            }}
        </NavbarContext.Consumer>
    )
}
export default Navbar;
