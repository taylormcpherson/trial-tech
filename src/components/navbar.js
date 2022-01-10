import * as React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo-dark.png'

const NavBar = () => {
  return (
    <header className="navbar">
        <div className="navbar__logo" aria-label="Logo">
            <Link className="navbar__logo-link" activeClassName="active" to="/">
                <img 
                    className="navbar__logo-img"
                    src={Logo} 
                    alt="Zweng Trial Technology Logo."
                    width='200px'>
                </img>
            </Link>
        </div> 
        <nav aria-label="Primary">
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <Link className="link__primary navbar__link" activeClassName="active" to="/">Services</Link>
                </li>
                <li className="navbar__list-item">
                    <Link className="link__unlink button__primary" activeClassName="active" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar