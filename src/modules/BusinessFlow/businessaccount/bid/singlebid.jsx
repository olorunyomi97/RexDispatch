import React, { useState, useEffect } from 'react';
import axios from "axios";
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import Footer from '../../../footer/footer';
import Moment from 'react-moment';

const Singlebid = (props) => {
    const [singleBid, setSingleBid] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + `/business/bid/manage_bid/${props.match.params.id}`)
        .then(data => {
            setSingleBid(data.data.data)
            console.log(data.data.data)
        });
    },[API_URL,props.match.params.id ]);


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
            {
                singleBid && singleBid.map((bid, idx) => {
                    console.log(bid.parcel)
                    return (
                        <div key={idx} data={bid} className="row">
                        <div className="col-md-12">
                        <div className="card account_card pt-3 pb-3">
                            <AccountTab />
                                <div className="row mb-5 mt-5">
                                    <div className="col-md-6">
                                        <div className="row pl-5">
                                            <div className="col-4">
                                                <p className="dispatch_history_details_text">Order Number</p>
                                                <p className="dispatch_history_details_subtext">#{bid.parcel.length ? bid.parcel[0].order_number : " "}</p>
                                            </div>
                                            <div className="col-4">
                                                <p className="dispatch_history_details_text">Bid Date</p>
                                                <p className="dispatch_history_details_item"><Moment format='MM-DD-YYYY'>{bid.createdAt}</Moment></p>
                                            </div>
                                            <div className="col-4">
                                                <p className="dispatch_history_details_text">Bid Price</p>
                                                <p className="dispatch_history_details_item">₦{bid.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                </div>
                                <div className="row mt-3 pl-5">
                                    <div className="col-md-6">
                                        <p className="dispatch_history_header">Pickup Details</p>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Pickup Address</p>
                                            <p className="dispatch_details_item">{bid.parcel.length ? bid.parcel[0].pickup_address : " "}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Bid Status</p>
                                            <p className="dispatch_details_item" style={{textTransform:'capitalize'}}>{bid.parcel.length ? bid.parcel[0].status : " "}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Sender's Name</p>
                                            <p className="dispatch_details_item">{bid.parcel.length ? bid.parcel[0].senders_name : " "}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Phone Number</p>
                                            <p className="dispatch_details_item">{bid.parcel.length ? bid.parcel[0].senders_phone : " "}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="dispatch_history_header">Delivery Details</p>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Delivery Address</p>
                                            <p className="dispatch_details_item">{bid.parcel.length ? bid.parcel[0].delivery_address : " "}</p>
                                        </div>
                                        {/* <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Nearest Landmark</p>
                                            <p className="dispatch_details_item">{bid.parcel.length ? bid.parcel[0].payment_status : " "}</p>
                                        </div> */}
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Reciever's Name</p>
                                            <p className="dispatch_details_item">{bid.parcel.length ? bid.parcel[0].recipient_name : " "}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Phone Number</p>
                                            <p className="dispatch_details_item">{bid.parcel.length ? bid.parcel[0].recipient_phone : " "}</p>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                    </div>
                    )
                })
            }
            </div>
            </section>
            <Footer />
        </div>
    )
}

export default Singlebid;