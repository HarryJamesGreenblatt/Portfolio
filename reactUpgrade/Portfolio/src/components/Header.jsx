import { Link, NavLink } from "react-router-dom";


export default function Header () {
    return(
        <header>
            <nav
                className="navbar"
            >
                <Link className="brand" to={"/"}>hJg</Link>
    
                <div className="nav-link-container">
                    <NavLink
                        to={'/'}
                        className={({isActive}) => isActive ? "active-style" : null}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={'about'}
                        className={({isActive}) => isActive ? "active-style" : null}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to={'skills'}
                        className={({isActive}) => isActive ? "active-style" : null}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to={'contact'}
                        className={({isActive}) => isActive ? "active-style" : null}
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    )
} 
