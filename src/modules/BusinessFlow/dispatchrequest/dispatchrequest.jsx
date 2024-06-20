import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import Footer from '../../footer/footer';
import PagesNav from '../../pagesnav/pagesnav';
import BidModal from '../bidmodal/bidmodal';
import './dispatchrequest.css'

const Dispatchrequest = (data) => {
    // const history = useHistory();
    const [showBidModal, setShowBidModal] = useState(false);
    //  const { _id } = useParams();

    const modalClose = () => {
        setShowBidModal(false);
    }
    const modalShow =() => {
        setShowBidModal(true);
    }

    const [dispatchRequests, setDispatchRequest] = useState(null);
    
    const API_URL = process.env.REACT_APP_API_URL;
    // `/parcel/get_parcels/${_id}`, data)
    useEffect(() => {
        axios.get(API_URL + '/parcel/get_parcels', data)
        .then(data => {
            console.log(data.data.data)
            setDispatchRequest(data.data.data)
        });
    },[data, API_URL]);

    // const seeDetails = (e) => {
    //     history.push(`/dispatch-details/${_id}`);
    // };

    return (
        <div>
            <div>
                <div className="dispatch_jumbotron">
                    <PagesNav />
                    <div className="container">
                        <div className="row dispatch_row">
                        <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <p className="dispatch_title">Dispatch Requests</p>
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
                {/* Dispatch Request Body */}
                <section className="dispatch_body">
                    <div className="container">
                        {(dispatchRequests != null && dispatchRequests.length <=0) ?
                            <div className="col-md-12"  style={{justifyContent:'center'}}> 
                                <h5>No Parcels created by customers yet.</h5>
                            </div>
                            :
                            <>
                                <div className="row">
                                {
                                dispatchRequests && dispatchRequests.map((dispatchRequest,dispatch ) => {
                                return (
                                    <div key={dispatch} data={dispatchRequest} className="col-sm-3 col-md-6 col-lg-4 col-xl-3 mb-4">
                                        <div className="card dispatch_card pb-4">
                                            <div className="row">
                                                <div className="col-6 pt-3">
                                                    <p className="dispatch_card_item mb-0">Pick up</p>
                                                </div>
                                                <div className="col-6 pt-3">
                                                    <p className="dispatch_card_item2">now</p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p className="dispatch_card_title pl-3 mb-2">{dispatchRequest.pickup_address}</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-1 pl-0"></div>
                                                <div className="col-md-10">
                                                <hr className="dispatch_hr " />
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                            {/* horizontal line */}
                                            <div className="row">
                                                <div className="col-12 dispatch_destination">
                                                    <p className="dispatch_card_destination mb-0 pb-2">Destination</p>
                                                    <p className="dispatch_card_title2 mb-0 pb-2">{dispatchRequest.delivery_address}</p>
                                                    {/* <p className="dispatch_card_destination mb-0">and 2 other locations</p> */}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 pt-4">
                                                    <Link className="link" to={`/dispatch-details/${dispatchRequest._id}`}><p className="dispatch_card_text mb-0 pl-3">See Details</p></Link>
                                                </div>
                                                {/* <div className="col-6 pt-4 pl-0 dispatch_button">
                                                    <Link className="dispatch_btn" to="#" onClick={modalShow}>Make Bid</Link>
                                                    <BidModal parcel_id = { dispatchRequest._id } showBidModal={showBidModal} modalClose={modalClose}/>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    )})
                                }
                                </div>
                            </>
                        }
                    </div>
                </section>
                <Footer />
            </div> 
        </div>
    )
}

export default Dispatchrequest;

