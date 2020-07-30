import React from 'react'
import './navbar.style.scss'
import Logo from '../../assets/images/juicysellz.png'
import {Link} from "react-router-dom";

const Navbar = ()=>{
    return (
        <React.Fragment>
        <nav className="navbar">
            <Link className="navbar--logo" to="/">
                <img src={Logo} alt="" srcset=""/>
                <h4>JuicySellz</h4>
            </Link>
            <ul className="navbar--links">
                <li className="navbar--links--link"><Link to="/drinks">Drinks</Link></li>
                <li className="navbar--links--link"><Link to="/contact">Contact</Link> </li>
                <li className="navbar--links--link"><Link to="/getin">Get In</Link> </li>
            </ul>
        </nav>
        </React.Fragment>
    )
}

export default Navbar