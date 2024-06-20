import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountTab from '../../../partials/accounttab';
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import Footer from '../../../footer/footer';
import Moment from 'react-moment';
// import ReactPaginate from "react-paginate";
import './bid.css';

const Bid = (data) => {
    const [bids, setBids] = useState(null);
    // const [showbids, setShowbids] = useState(json.slice(0,20))

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + '/business/bid/manage_bids', data)
        .then(data => {
            console.log(data.data.data);
            setBids(data.data.data)
        });
    },[data, API_URL]);

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
                            <AccountTab />
                            {/* bids */}
                            <div className="container">
                                <div className="row pr-5 pl-5 business_bid">
                                {(bids != null && bids.length <=0) ?
                                    <div className="col-md-12"  style={{justifyContent:'center'}}> 
                                        <h5>No Bids placed yet.</h5>
                                    </div>
                                    :
                                    <>
                                        {bids &&
                                        bids.map((bid, key) => {
                                            console.log(bid.parcel);
                                            return key <= 19 ? 
                                            (
                                            <div key={key} data={bid} className="col-sm-3 col-md-6 col-lg-4 col-xl-4 mb-4">
                                            <div className="card dispatch_card pb-4">
                                                <div className="row">
                                                    <div className="col-6 pt-3">
                                                        <p className="dispatch_card_item pickup_bid mb-0">Pick up</p>
                                                    </div>
                                                    <div className="col-6 pt-3">
                                                        <p className="dispatch_card_item2 transit" style={{textTransform:'capitalize'}}>{bid.status}</p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <p className="dispatch_card_title pl-3 mb-2">{ bid.parcel.length ? bid.parcel[0].pickup_address : " "}</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-1 pl-0"></div>
                                                    <div className="col-md-10">
                                                    <hr className="dispatch_hr"/>
                                                    </div>
                                                    <div className="col-md-1"></div>
                                                </div>
                                                {/* horizontal line */}
                                                <div className="row">
                                                    <div className="col-12 dispatch_destination">
                                                        <p className="dispatch_card_destination mb-0 pb-2">Destination</p>
                                                        <p className="dispatch_card_title2 mb-0 pb-2 pr-2">{ bid.parcel.length ? bid.parcel[0].delivery_address : " "}</p>
                                                        {/* <p className="dispatch_card_destination mb-0">and 2 other locations</p> */}
                                                    </div>
                                                </div>
                                                <div className="row pr-5">
                                                    <div className="col-6 pt-4">
                                                        <Link className="link" to={`/business-bid/${bid._id}`}><p className="dispatch_card_text mb-0 pl-3">See Details</p></Link>
                                                    </div>
                                                    <div className="col-6 pt-4">
                                                        <p className="dispatch_card_texts mb-0 pl-3"><Moment format='MM-DD hh:ssa'>{bid.createdAt}</Moment></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ) : undefined
                                    })   
                                    }
                                    </>
                                }
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

export default Bid;
