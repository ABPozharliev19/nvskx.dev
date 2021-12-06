import { Link } from 'react-router-dom';

export const NavStart = ({ children }) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main-navigation">
            {children}
        </nav>
    )
};

export const NavItem = ({ children, link }) => {
    return (
        <Link className="navbar-item" to={link}>
            {children}
        </Link>
    )
}

export const NavBrand = ({ src }) => {
    return(
        <NavItem>
            <img src={src} alt="logo"/>
        </NavItem>
    )
}
