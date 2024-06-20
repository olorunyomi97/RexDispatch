import React from 'react';
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import Footer from '../../../footer/footer';
import transit from '../../../../img/images/transit.png'
import UserTab from '../../../partials/usertab';
import './feedback.css'

export default function feedback() {
    return (
        <div>
            <div className="user_account">
            <div className="user_account_jumbotron user_flex">
                <PagesNav />
                <div className="container">
                    <div className="row user_account_row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <p className="user_account_title pb-5">My Account</p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            {/* Account body */}
            <section className="account_body"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card account_card pt-3 pb-3">
                        <UserTab />
                            {/* wallet section */}
                            <div className="wallet mt-5">
                                <div className="container">
                                    <div className="row mb-5">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-10">
                                            <img src={transit} alt="transit" />
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <Link className="block feedback_btn" to="/user-submit-feedback">Submit Feedback</Link>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </div>
        </div>
    )
}
