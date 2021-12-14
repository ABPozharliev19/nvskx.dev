import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.scss'

export const NavStart = (props) => {
    NavStart.propTypes = {
        children: PropTypes.node,
        isActive: PropTypes.bool,
        setActive: PropTypes.func,
    };

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main-navigation">
            <div className="container">
                <NavBrand src={process.env.PUBLIC_URL + "/logo.png"} isActive={props.isActive} setActive={props.setActive}/>
                {props.children}
            </div>
        </nav>
    )
};

export const NavItem = (props) => {
    NavItem.propTypes = {
        children: PropTypes.node,
        link: PropTypes.string,
    };

    return (
        <a className="navbar-item" href={props.link}>
            {props.children}
        </a>
    )
}

const NavBrand = (props) => {
    NavBrand.propTypes = {
        src: PropTypes.string,
        isActive: PropTypes.bool,
        setActive: PropTypes.func,
    };

    return (
        <>
            <div className="navbar-brand">
                <NavItem link={"/"}>
                    <img src={props.src} alt="logo" style={{maxHeight: "2.3rem"}}/>
                </NavItem>
                <NavItem>
                    <div className={styles.nameAndStack}>
                            <span> Atanas Pozharliev</span>
                            <span> Backend Dev. </span>
                    </div>
                </NavItem>

                <a role="button"
                   style={{height: "4rem"}}
                   className={`navbar-burger burger ${props.isActive ? "is-active" : ""}`}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="nav"
                   onClick={() => {props.setActive()}}
                >
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>
        </>
    )
}

export const NavMenu = (props) => {
    NavMenu.propTypes = {
        children: PropTypes.node,
        isActive: PropTypes.bool,

    };

    return (
        <div id="nav" className={`navbar-menu ${props.isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
                {props.children}
            </div>
        </div>
    )
};

export const NavEnd = (props) => {
    NavEnd.propTypes = {
        children: PropTypes.node,
    };

    return (
    <div className="navbar-end">
        {props.children}
    </div>
    )
};

export const NavText = (props) => {
    NavText.propTypes = {
        children: PropTypes.node,
        isActive: PropTypes.bool
    };

    return (
        <span className={`${props.isActive ? styles.navText : ""} `}> {props.children} </span>
    )
}

