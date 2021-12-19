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
                <NavBrand src={process.env.PUBLIC_URL + "/placeholder.png"} isActive={props.isActive} setActive={props.setActive}/>
                {props.children}
            </div>
        </nav>
    )
};

export const NavItem = (props) => {
    NavItem.propTypes = {
        children: PropTypes.node,
        link: PropTypes.string,
        isBlank: PropTypes.bool,
    };

    return (
        <a className="navbar-item" href={props.link} target={`${props.isBlank ? "_blank" : ""}`}>
            {props.children}
        </a>
    )
}

const NavIcon = (props) => {
    NavIcon.propTypes = {
        icon: PropTypes.string,
        maxH: PropTypes.string,
    }

    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/navIcons/${props.icon.toLowerCase()}.png`}
                 style={{maxHeight: props.maxH}}
            />
        </>
    )
};

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
                    <img src={props.src} className={styles.navBrand} alt="logo"/>
                </NavItem>
                <NavItem>
                    <div className={styles.nameAndStack}>
                            <span> Atanas Pozharliev</span>
                            <span> Backend Dev. </span>
                    </div>
                </NavItem>
                <NavItem link="https://github.com/ABPozharliev19" isBlank={true}>
                        <NavIcon icon="GitHub" maxH="2.3rem"/>
                </NavItem>
                <NavItem link="https://www.linkedin.com/in/atanas-pozharliev-6012b0218/" isBlank={true}>
                    <NavIcon icon="Linkedin" maxH="2rem"/>
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



