import React, { useState, useEffect } from 'react';
import {  useDispatch } from "react-redux";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from "../../redux/general/auth/authActions";
import { user_category } from '../../helper/user-category-helper';

const user_role = JSON.parse(localStorage.getItem("user_role"));
const Topnav = (props) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const curr_user = JSON.parse(localStorage.getItem("authUser"))
            setUser(curr_user);
        }
    }, [])
    const logOut = () => {
        dispatch(logout())
        window.location.reload();
    };
   

    return (
        <div className="register_navigation row">
            <div className="col-md-7 mt-2">
                <div className="business_account_nav hide">
                    <div className="mr-2 ml-4">
                        <Nav.Item>
                            <div onClick={() => user_category('customer','create-parcel')} className="business_tab_link_active pr-0 pl-0" href="/create-parcel">Send Parcels</div>
                        </Nav.Item> 
                    </div>
                    <div className="mr-2 ml-4">
                        <Nav.Item>
                            <div onClick={() => user_category('business', 'register-business')} className="business_tab_link_active pr-0 pl-0" to="/register-business">Register your Business</div>
                        </Nav.Item> 
                    </div>
                    <div className="mr-2 ml-4">
                        <Nav.Item>
                            <Link className="business_tab_link_active pr-0 pl-0" to="/faq">FAQs</Link>
                        </Nav.Item> 
                    </div>
                </div>
            </div>
            
            {(user) ? 
                <>
                    <div className="col-md-5 mt-1">
                        <div className="business_account_nav signed_in_account mt-1">
                            <div className="mr-2">
                                <Nav.Item className="signed_in_account">
                                    <div className="dropdown">
                                        <button className="btn btn-icon dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-circle mr-2" style={{color: '#c4c4c4'}}></i>My Account
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
                    </div>
                </> :
                <>
                    <div className="col-md-5 hide">
                        <div className="row mt-3">
                            <div className="col-md-3"></div>
                            <div className="col-md-3 pr-0">
                                <Link className="register_log" to="/signin">Sign in</Link>
                            </div>
                            <div className="col-md-6 pl-0">
                                <Link className="register_get_started" to="/get-started">Get Started </Link>
                            </div>
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Topnav;