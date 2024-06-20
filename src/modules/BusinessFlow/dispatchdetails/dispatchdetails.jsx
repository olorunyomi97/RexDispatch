import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';
import PagesNav from '../../pagesnav/pagesnav';
import BidModal from '../bidmodal/bidmodal';
import './dispatchdetails.css';

const Dispatchdetails = (props) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const [dispatchDetail, setDispatchDetail] = useState(null);

    const modalClose = () => {
        setShowBidModal(false);
    }
    const modalShow =() => {
        setShowBidModal(true);
    }

    const API_URL = process.env.REACT_APP_API_URL;
    // console.log(props.match.params.id)

    useEffect(() => {
        axios.get(API_URL + `/parcel/dispatch_history/${props.match.params.id}`)
        .then(data => {
            setDispatchDetail(data.data.data)
        });
    },[API_URL,props.match.params.id ]);

    return (
        <div>
            <div>
                <div className="dispatch_jumbotron">
                    <PagesNav />
                    <div className="container">
                        <div className="row dispatch_row">
                        <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <p className="dispatch_title">Available Orders</p>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-10">
                                        <p className="dispatch_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                {/* Dispatch Details Body */}
                {
                dispatchDetail && (
                <section className="dispatch_details">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-11 bid_btn">
                                <Link className="make_bid_btn" to="#" onClick={modalShow}>Make A Bid</Link>
                                <BidModal parcel_id = { dispatchDetail._id }showBidModal={showBidModal} modalClose={modalClose}/>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row">
                        
                            <div className="col-md-11 mt-3 mb-5">
                                <div className="card dispatch_details_card">
                                    <div className="container pl-5 pb-3">
                                        <div>
                                            <p  className="dispatch_details_title mt-3">{dispatchDetail.pickup_address}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="details_header mb-0">Pickup Details</p>  
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <hr className="dispatch_details_hr"/> 
                                                    </div>
                                                </div>
                                                <div className="mb-4 pt-3">
                                                    <p className="dispatch_details_text mb-1">Package Type</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.package_type}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="dispatch_details_text mb-1">Pickup Address</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.pickup_address}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="dispatch_details_text mb-1">Notable Landmark</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.notable_landmark}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="dispatch_details_text mb-1">Sender's Name</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.senders_name}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="dispatch_details_text mb-1">Phone Number</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.senders_phone}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <p className="details_header mb-0"> Delivery Details</p>  
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <hr className="dispatch_details_hr"/> 
                                                    </div>
                                                </div>
                                                <div className="mb-4 pt-3">
                                                    <p className="dispatch_details_text mb-1">Delivery Address</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.delivery_address}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="dispatch_details_text mb-1">Nearest Landmark</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.nearest_landmark}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="dispatch_details_text mb-1">Reciever's Name</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.recipient_name}</p>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="dispatch_details_text mb-1">Phone Number</p>
                                                    <p className="dispatch_details_item">{dispatchDetail.recipient_phone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* make a bid modal */}
                </section>
                )
            }
                <Footer />
            </div>
        </div>
    )
}

export default Dispatchdetails;