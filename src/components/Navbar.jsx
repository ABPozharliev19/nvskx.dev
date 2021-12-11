import { Link } from 'react-router-dom';
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.css'

export const NavStart = ({ children, isActive, setActive }) => {
    return (
        <nav className="navbar is-black" role="navigation" aria-label="main-navigation">
            <div className="container">
                <NavBrand src={process.env.PUBLIC_URL + "/logo.png"} isActive={isActive} setActive={setActive}/>
                {children}
            </div>
        </nav>
    )
};

NavStart.propTypes = {
    children: PropTypes.any,
    isActive: PropTypes.bool,
    setActive: PropTypes.func,
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

const NavBrand = ({ src, isActive, setActive }) => {
    return (
        <>
            <div className="navbar-brand">
                <NavItem link={"/"}>
                    <img src={src} alt="logo" style={{maxHeight: "2.3rem"}}/>
                </NavItem>
                <NavItem>
                    <div className={styles.nameAndStack}>
                            <span> Atanas Pozharliev</span>
                            <span> Backend Dev. </span>
                    </div>
                </NavItem>

                <a role="button"
                   style={{height: "4rem"}}
                   className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="nav"
                   onClick={() => {setActive()}}
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
    isActive: PropTypes.bool,
    setActive: PropTypes.func,
};

export const NavMenu = ({ children, isActive }) => {
    return (
        <div id="nav" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
                {children}
            </div>
        </div>
    )
};

NavMenu.propTypes = {
    children: PropTypes.any,
    isActive: PropTypes.bool,

};

export const NavEnd = ({ children }) => {
    return (
    <div className="navbar-end">
        {children}
    </div>
    )
};

NavEnd.propTypes = {
    children: PropTypes.any,
}
