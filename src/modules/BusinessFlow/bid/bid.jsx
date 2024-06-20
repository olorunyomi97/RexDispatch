import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo/logo.png';
import bid from '../../../img/images/bid.png';
import TopNav from '../../partials/topnav';
import SideNav from '../../partials/sidenav';
import './bid.css'

const Bid = () => {
    return (
        <div className="bid_height">
           <div className="bid_successful">
                <section>
                    <div className="row">
                    <div className="col-md-4">
                            <SideNav />
                            </div>
                        <div className="col-md-8">
                            <TopNav />
                            {/* Register Nav Section */}
                            {/* Bid Response Section */}
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <img src={bid} alt="logo" width="50%" height="45%"/>
                                    <div className="mt-3 mb-5">
                                        <p className="bid_text">Your Bid has been posted.</p>
                                        <div className="row mb-5">
                                            <div className="col-md-2"></div>
                                            <div className="col-md-8">
                                                <p className="bid_subtext">A notification will be sent to you if you won this bid</p>
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div>
                                        <div className="mb-3">
                                            <Link className="bid_buttton"to="/dispatch-request">Explore Available Offers</Link>
                                        </div>
                                        <div className="mt-5">
                                            <Link className="deliverables">Manage your deliverables</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
        </div>
    )
}

export default Bid;