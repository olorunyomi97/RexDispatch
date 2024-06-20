import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import UserTab from '../../../partials/usertab';
import PagesNav from '../../../pagesnav/pagesnav';
import Footer from '../../../footer/footer'
import './trackparcel.css'

const Trackparcel = (props) => {
    const [track, setTrack] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;

    // useEffect(() => {
    //     axios.get(API_URL + `parcel/track_parcel/${props.match.params.id}`)
    //     .then(data => {
    //         setTrack(data.data.data)
    //         console.log(data.data.data)
    //     });
    // },[API_URL,props.match.params.id ]);


    return (
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
                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <div className="input_order">
                                            <p className="order_number">Order Number</p>
                                            <input type="text" className="account_input form-control" placeholder="Enter Order number" />
                                            <Link className="block track_btn" to="/user-feedback">Track Now</Link>
                                        </div>
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
    )
}

export default Trackparcel;