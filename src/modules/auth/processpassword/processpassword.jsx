import React from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../../img/images/thumb.png';
import SideNav from '../../partials/sidenav';

export default function processpassword() {
    return (
        <div>
            <div className="order_placed">
                <div className="bid_successful">
                <section>
                    <div className="row">
                    <div className="col-md-4">
                        <SideNav />
                    </div>
                    <div className="col-md-8">
                        <div className="register_navigation row">
                        </div>
                            {/* Bid Response Section */}
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <img src={thumb} alt="logo" />
                                    <div className="mt-3 mb-5 pl-2 pr-2">
                                        <p className="bid_text">Congratulations.</p>
                                        <div className="row mb-5">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-10">
                                                <p className="bid_subtext">A six digit otp token has been sent to your phone.</p>
                                                {/* <p className="bid_subtext">Your order number is 03345</p> */}
                                            </div>
                                            <div className="col-md-1"></div>
                                        </div>
                                        <div className="mb-3">
                                            <Link className="bid_buttton"to="/resetpassword">Reset Password</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
    )
}
