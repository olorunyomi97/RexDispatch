import React, { useEffect, useState } from 'react';
import {  useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import logo from '../../img/logo/logo.png';
import { logout } from "../../redux/general/auth/authActions";
import './pagesnav.css';

const user_role = JSON.parse(localStorage.getItem("user_role"));
const Pagesnav = () => {
    const [user, setUser] = useState(null);
    // console.log(user)
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
                    <Link className="account_rex" to="/home"> <img src={logo} alt="logo"/>REX DISPATCH</Link>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="mobile-nav">
                         <ul className="navbar-nav ml-auto">
                             {/* <li className="nav-item">
                                 <Link className="mr-4 account_menu" to="/create-parcel">Send Parcels</Link>
                             </li> */}
                             <li className="nav-item">
                                 <Link className="mr-4 account_menu" to="/home">Home</Link>
                             </li>
                             <li className="nav-item">
                                 <Link className="mr-4 account_menu" to="/faq">FAQs</Link>
                             </li>
                             <li className="nav-item">
                                 <Link className="mr-4 account_menu" to="/contact">Contact</Link>
                             </li>
                         </ul>
                         <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item mr-3">
                                <Link className="my_account_bell mt-1" to="#"><i className="fas fa-bell" style={{color: 'white'}}></i></Link>
                            </li> */}
                         </ul>
                         <div className="business_account_nav pages_signed_in_account">
                             <div className="mr-2 ml-4">
                                 <Nav.Item className="signed_in_account">
                                     <div className="dropdown" style={{color:'white'}}>
                                         <button className="btn btn-icon dropdown-toggle-nav" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                             <span style={{color:'white'}}><i className="fas fa-circle mr-2" style={{color: '#c4c4c4'}}></i>My Account</span>
                                         </button>
                                         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                             <Link className="dropdown-item" to= { user_role.user_category === 'customer' ? '/user-account' : '/business-account' }>Your Account</Link>
                                             <Link className="dropdown-item" to= { user_role.user_category === 'customer' ? '/user-security' : '/business-security' }>Change Password</Link>
                                             <Link className="dropdown-item" to="#" onClick={logOut}>Log Out</Link>
                                         </div>
                                     </div>
                                 </Nav.Item> 
                             </div>
                         </div>
                     </div>
                 </div>
                </nav>
            </div> 
        </div>
    )
}

export default Pagesnav;