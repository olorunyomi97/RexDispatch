import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  useDispatch } from "react-redux";
import { Nav } from 'react-bootstrap';
import logo from '../../img/logo/logo.png';
import { logout } from "../../redux/general/auth/authActions";
import { user_category } from '../../helper/user-category-helper';
import './navbar.css'

const user_role = JSON.parse(localStorage.getItem("user_role"));
export default function Navbar() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const curr_user = JSON.parse(localStorage.getItem("authUser"))
            setUser(curr_user);
        }
    }, [])
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout())
        window.location.reload();
    };
    

    return (
        <div>
           <div className="rex_nav">
                <nav className="navbar navbar-expand-xl navbar-light pl-0">
                    <div className="container pt-4 m-0">
                    <Link className="account_rex" to="/home" style={{color:'#00114E'}}> <img src={logo} alt="logo" />REX DISPATCH</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                     <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <div onClick={() => user_category('customer')} className="mr-4 account_menu" to="/create-parcel" style={{color:'#00114E'}}>Send Parcels</div>
                            </li>
                            <li className="nav-item">
                                <div onClick={() => user_category('business')} className="mr-4 account_menu" to="/register-business" style={{color:'#00114E'}}>Register your business</div>
                            </li>
                            <li className="nav-item">
                                <Link className="mr-4 account_menu" to="/faq" style={{color:'#00114E'}}>FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="mr-4 account_menu" to="/contact" style={{color:'#00114E'}}>Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-3"></li>
                        </ul>

                        {(user) ? 
                        <>

                            <div className="business_account_nav pages_signed_in_account">
                                <div className="mr-2 ml-4">
                                    <Nav.Item className="signed_in_account">
                                        <div className="dropdown" style={{color:'#00114E'}}>
                                            <button className="btn btn-icon dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span style={{color:'#00114E'}}><i className="fas fa-circle mr-2" style={{color: '#c4c4c4'}}></i>My Account</span>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to= { user_role.user_category === 'customer' ? '/user-account' : '/business-account' }>Your Account</Link>
                                                <Link className="dropdown-item" to= { user_role.user_category === 'customer' ? '/user-security' : '/business-security' }>Change Password</Link>
                                                <Link className="dropdown-item" to="#" onClick={logOut} >Log Out</Link>
                                            </div>
                                        </div>
                                    </Nav.Item> 
                                </div>
                            </div>
                        </> :
                        <>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="login" to="/signin">Sign in</Link>
                                </li>
                            </ul>
                            <Link className="get_started" to="/get-started">Get Started </Link>
                        </>
                        }
                     </div>
                 </div>
                </nav>
            </div> 
        </div>
    )
}
