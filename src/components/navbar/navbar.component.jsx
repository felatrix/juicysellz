import React from 'react'
import './navbar.style.scss'
import Logo from '../../assets/images/juicysellz.png'
import {Link} from "react-router-dom";
import {auth} from '../../utils/firebase.utils'
import {connect} from 'react-redux'

const Navbar = ({currentUser})=>{
    return (
        <React.Fragment>
        <nav className="navbar">
            <Link className="navbar--logo" to="/">
                <img src={Logo} alt="" />
                <h4>JuicySellz</h4>
            </Link>
            <ul className="navbar--links">
                <li className="navbar--links--link"><Link to="/">Drinks</Link></li>
                <li className="navbar--links--link"><Link to="/contact">Contact</Link> </li>
                { currentUser.currentUser ?(<li className="navbar--links--link" onClick={()=>auth.signOut().then(function() {
                // Sign-out successful.
                console.log('logout sukses')
                }).catch(function(error) {
                // An error happened.
                console.log('logout error')
                })}><a>Get Out</a></li>):
                (<li className="navbar--links--link"><Link to="/getin">Get In</Link> </li>)
                }
            </ul>
        </nav>
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    return(
    {
        currentUser:state.user
    }
)}

export default connect(mapStateToProps)(Navbar)