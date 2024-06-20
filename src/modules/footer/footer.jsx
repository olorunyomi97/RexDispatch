import React from 'react';
import logo from '../../img/logo/logo.png';
import './footer.css';

export default function Footer() {
    return (
        <div>
           <div className="footer">
                <section className="container">
                    <div className="row footer_content">
                        <div className="col-md-3 footer_img">
                            <div className="footer_logo">
                                <img src={logo} alt="logo" width="30%" height="100%"/>
                            </div>
                            <p className="footer_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                        </div>
                        <div className="col-md-3">
                            <ul className="footer_list">
                                <li className="footer_list_header">
                                    <p>Navigation</p>
                                </li>
                                <li className="footer_list_text">
                                    <p className="mb-0">Register your Ride</p>
                                </li>
                                <li className="footer_list_text">
                                    <p className="mb-0">Send Parcels</p>
                                </li>
                                <li className="footer_list_text">
                                    <p className="mb-0">FAQs</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <ul className="footer_list">
                                <li className="footer_list_header">
                                    <p>Company</p>
                                </li>
                                <li className="footer_list_text">
                                    <p className="mb-0">About</p>
                                </li>
                                <li className="footer_list_text">
                                    <p className="mb-0">Terms of Use</p>
                                </li>
                                <li className="footer_list_text">
                                    <p className="mb-0">Privacy Policy</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="footer_list">
                                <li className="footer_list_header">
                                    <p>Company</p>
                                </li>
                                <li className="footer_list_contact">
                                    <p>Feel free to get in touch with us via phone or send us a message.</p>
                                </li>
                                <li className="footer_contact">
                                    <p className="mb-0">+1-301-340-3946</p>
                                </li>
                                <li className="footer_contact">
                                    <p className="mb-0"> info@rexlogistics.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="footer_hr"/>
                    <div className="row">
                        <div className="col-6">
                        <p className="footer_item">© Rex Logistics 2021, All Rights Reserved</p>
                        </div>
                        <div className="col-6">
                            <div className="footer_icons">
                                <i className="fab fa-twitter mr-3"></i>
                                <i className="fab fa-facebook-f mr-3"></i>
                                <i className="fab fa-google"></i>
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
        </div>
    )
}
