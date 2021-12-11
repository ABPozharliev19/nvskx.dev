import React, {
} from "react";

import {
    NavStart,
    NavEnd,
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
                                <NavEnd isActive={context.navbarIsActive}>
                                    <NavItems/>
                                </NavEnd>
                            </NavStart>
                        )
                    } else {
                        return (
                            <NavStart isActive={context.navbarIsActive} setActive={context.updateNavbarActive}>
                                <NavMenu isActive={context.navbarIsActive}>
                                    <NavItems/>
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
