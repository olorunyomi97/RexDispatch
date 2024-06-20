import React, { useState, useEffect } from 'react';
import axios from "axios";
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import Footer from '../../../footer/footer';

const Dispatchhistorydetails = (props) => {
    const [dispatchhistory, setDispatchhistory] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;
    // console.log(props.match.params.id)

    useEffect(() => {
        axios.get(API_URL + `/parcel/dispatch_history/${props.match.params.id}`)
        .then(data => {
            setDispatchhistory(data.data.data)
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
                dispatchhistory && (
                <div className="row">
                    <div className="col-md-12">
                        <div className="card account_card pt-3 pb-3">
                            <AccountTab />
                            
                                <div className="row mb-5 mt-5">
                                    <div className="col-md-6">
                                        <div className="row pl-5">
                                            <div className="col-6">
                                                <p className="dispatch_history_details_text">Order Number</p>
                                                <p className="dispatch_history_details_subtext">#{dispatchhistory.order_number}</p>
                                            </div>
                                            <div className="col-6">
                                                <p className="dispatch_history_details_text">STATUS</p>
                                                <p className="dispatch_history_details_item">{dispatchhistory.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                </div>
                                <div className="row mt-3 pl-5">
                                    <div className="col-md-6">
                                        <p className="dispatch_history_header">Pickup Details</p>
                                        <div className="mb-4 pt-3">
                                            <p className="dispatch_details_text mb-1">Package Type</p>
                                            <p className="dispatch_details_item">{dispatchhistory.package_type}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Notable Landmark</p>
                                            <p className="dispatch_details_item">{dispatchhistory.notable_landmark}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Sender's Name</p>
                                            <p className="dispatch_details_item">{dispatchhistory.senders_name}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Phone Number</p>
                                            <p className="dispatch_details_item">{dispatchhistory.senders_phone}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="dispatch_history_header">Delivery Details</p>
                                        <div className="mb-4 pt-3">
                                            <p className="dispatch_details_text mb-1">Delivery Address</p>
                                            <p className="dispatch_details_item">{dispatchhistory.delivery_address}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Nearest Landmark</p>
                                            <p className="dispatch_details_item">{dispatchhistory.nearest_landmark}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Reciever's Name</p>
                                            <p className="dispatch_details_item">{dispatchhistory.recipient_name}</p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="dispatch_details_text mb-1">Phone Number</p>
                                            <p className="dispatch_details_item">{dispatchhistory.recipient_phone}</p>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                </div>
                )
            }
            </div>
            </section>
            <Footer />
        </div>
    )
}

export default Dispatchhistorydetails;