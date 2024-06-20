import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo.png';

const sidenav = () => {
    return (
        <div className="side_height" style={{overflowX:'hidden'}}> 
            <div className="register_column pt-2">
                <div className="container pl-3">
                    <Link className="register_nav ml-2 mt-2" to="/home"> <img src={logo} alt="logo"/>REX DISPATCH</Link>
                </div>
                <div className="container pl-5 pt-4 hide">
                    <p className="register_text"></p>
                    <p className="register_text mb-0">Send Parcels</p>
                    <p className="register_text_2 mt-0">with ease.</p>
                    <p className="register_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
                <div className="container hide pb-5">
                    <ul className="register_list">
                        <li>
                            <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Choose Best Rates</p>
                        </li>
                        <li>
                            <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Send Parcels Easily</p>
                        </li>
                        <li>
                            <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Reliable Riders</p>
                        </li>
                    </ul>
                </div>
                {/* <div className="container hide">
                    <p className="register_footer">© Rex Logistics 2021, All Rights Reserved</p>
                </div> */}
            </div>
        </div>
    )
}

export default sidenav;