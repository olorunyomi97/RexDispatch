import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './accounttab.css';

export default function accounttab() {
    return (
        <div>
                <div className="business_account_nav">
                <div className="mr-3 ml-5">
                    <Nav.Item>
                        <Link className="business_tab_link pr-0 pl-0" to="/user-account">My Wallet</Link>
                    </Nav.Item> 
                </div>
                <div className="mr-5 ml-4">
                    <Nav.Item>
                        <Link className="business_tab_link pr-0 pl-0" to="/user-track-parcel">Track Parcel</Link>
                    </Nav.Item> 
                </div>
                <div className="mr-5 ml-4">
                    <Nav.Item>
                        <Link className="business_tab_link pr-0 pl-0" to="/user-submit-feedback">Feedback</Link>
                    </Nav.Item> 
                </div>
                <div className="mr-5 ml-4">
                    <Nav.Item>
                        <Link className="business_tab_link pr-0 pl-0" to="/user-dispatch-history">Dispatch History</Link>
                    </Nav.Item> 
                </div>
                <div className="mr-5 ml-4">
                    <Nav.Item>
                        <Link className="business_tab_link pr-0 pl-0" to="/user-notifications">Notifications</Link>
                    </Nav.Item> 
                </div>
                <div className="mr-5 ml-4">
                    <Nav.Item>
                        <Link className="business_tab_link pr-0 pl-0" to="/user-profile">Profile</Link>
                    </Nav.Item> 
                </div>
                <div className="mr-5 ml-4">
                    <Nav.Item>
                        <Link className="business_tab_link pr-0 pl-0" to="/user-security">Security</Link>
                    </Nav.Item> 
                </div>
            </div>
            <hr className="wallet_hr"/> 
        </div>
    )
}
