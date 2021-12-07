import { Link } from 'react-router-dom';
import React from 'react'
import PropTypes from 'prop-types'

export const NavStart = ({ children }) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main-navigation">
            <div className="container">
                <NavBrand src={process.env.PUBLIC_URL + "/logo.png"}/>
                {children}
            </div>
        </nav>
    )
};

NavStart.propTypes = {
    children: PropTypes.any,
};

export const NavItem = ({ children, link }) => {
    return (
        <Link className="navbar-item" to={{link}}>
            {children}
        </Link>
    )
}

NavItem.propTypes = {
    children: PropTypes.any,
    link: PropTypes.string
};

export const NavBrand = ({ src }) => {
    return (
        <>
            <div className="navbar-brand">
                <NavItem link={"/"}>
                    <img src={src} alt="logo" style={{maxHeight: "2.3rem"}}/>
                </NavItem>

                <a role="button"
                   className={"navbar-burger burger"}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="nav"
                >
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>
        </>
    )
}

NavBrand.propTypes = {
    src: PropTypes.string,
};

export const NavMenu = ({ children }) => {
    return (
        <div id="nav" className="navbar-menu">
            <div className="navbar-start">
                {children}
            </div>
        </div>
    )
}

NavMenu.propTypes = {
    children: PropTypes.any,
}

export const Icon = ({icon, text }) => {
    return (
        <>
        <span className="icon">
            <i className= {`fas fa-${icon.toLowerCase()}`}/>
        </span>
        <span>{text}</span>
        </>
    )
}

Icon.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
}

