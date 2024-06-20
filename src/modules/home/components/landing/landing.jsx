import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../../../../img/logo/apple.png';
import iphone from '../../../../img/images/x.png';
import phone from '../../../../img/images/iphone.png';
import './landing.css'

export default function landing() {
    return (
        <div className="landing">
            <section className="container">
                <div className="container row">
                    <div className="col-md-6  mt-md-5 pt-md-5 phone_landing">
                        <p className="landing_text mb-0">Send Parcels without</p>
                        <p className="landing_text_2 mt-0">Stress. Get the best Rates.</p>
                        <div className="row">
                            <div className="col-md-9">
                                <p className="landing_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3 landing_logo mr-2 mb-2">
                                    <img src={apple} alt="logo"/>
                            </div>
                            <div className="col-3 landing_logo phone_logo">
                                    <img src={apple} alt="logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-3 image_phone">
                        <img src={phone} alt="logo" width="85%" height="100%"/>
                    </div>
                    {/* <div className="col-md-1"></div> */}
                </div>
            </section>
            <section className="landing_body landing_flex pt-5">
                <div className="container mt-5">
                    <div className="row pb-5">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <p className="landing_body_text">Get the best rates from reliable dispatch companies</p>
                            {/* <p className="landing_body_text"></p> */}
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <p className="landing_body_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="dot dot_border mb-5"></div>
                            <p className="landing_headers">Choose Best Rates</p>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <p className="landing_headers_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <span className="dot_1 mb-5"></span>
                            <p className="landing_headers">Send Parcels Easily</p>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <p className="landing_headers_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <span className="dot_2 mb-5"></span>
                            <p className="landing_headers">Reliable Riders</p>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <p className="landing_headers_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="landing_blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 phone_flex">
                            <img src= {iphone} alt="iphone" width="100%" height="100%" />
                        </div>
                        <div className="col-md-7">
                            <p className="blue_text">Earn on Rex with a Business Account</p>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="blue_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6 blue_item">
                                    <i className="fas fa-check circle-icon mb-3" style={{ color: 'white'}}></i>
                                    <p className="blue_minitext">Register your business</p>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className="blue_item_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 blue_item">
                                    <i className="fas fa-check circle-icon mb-3" style={{ color: 'white'}}></i>
                                    <p className="blue_minitext">Add your bikes</p>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className="blue_item_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 blue_item">
                                    <i className="fas fa-check circle-icon mb-3" style={{ color: 'white'}}></i>
                                    <p className="blue_minitext">Choose a Plan</p>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className="blue_item_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 blue_item">
                                    <i className="fas fa-check circle-icon mb-3" style={{ color: 'white'}}></i>
                                    {/* <i className="fas fa-check-circle fa-2x mb-3" style={{ color: '#0BE05C'}}></i> */}
                                    <p className="blue_minitext">Start earning instantly</p>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <p className="blue_item_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 blue_item">
                                <Link className="get_started_blue" to="/register-business">Get Started </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                    </div>
                </div>
            </section>
            
        </div>
    )
}
