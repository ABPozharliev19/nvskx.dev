import React, {
} from "react";

import {
    NavStart,
    NavEnd,
    NavMenu
} from "../components/Navbar";

import useWindowDimensions from "../hooks/useWindowDimensions";

import { NavbarContext } from "../App";

import { NavItems } from "./NavItems";

function Navbar() {
    const {width} = useWindowDimensions();

    const EndOrMenu = width > 1023 ? NavEnd : NavMenu;

    return (
        <NavbarContext.Consumer>
            {context => {
                {return (
                        <NavStart isActive={context.navbarIsActive} setActive={context.updateNavbarActive}>
                            <EndOrMenu isActive={context.navbarIsActive}>
                                <NavItems/>
                            </EndOrMenu>
                        </NavStart>
                    )
                }}}
        </NavbarContext.Consumer>
    )
}
export default Navbar;
