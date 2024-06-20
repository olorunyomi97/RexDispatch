import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import { Link } from 'react-router-dom';
import PagesNav from '../../pagesnav/pagesnav';
import gig from '../../../img/images/gig.png';
import stars from '../../../img/images/stars.jpeg';
import OffersModal from "./offersmodal"
import ProceedModal from './proceedmodal';
import PaymentModal from './paymentmodal';
import FundModal from '../useraccount/wallet/fundmodal'
import Footer from '../../footer/footer';
import { db } from '../../../firebase/firebase';
import './alloffers.css'
// import AlloffersService from "./alloffersService";


const Allofers = (props, data) => {
    const STEP = 1;
    const MIN = 10;
    const MAX = 100;
    const { loading, setLoading } = props;
    // console.log(loading)
    const [values, setValues] = useState([25, 75]);
    const [offersModal, setOffersModal] = useState(false);
    const [proceedModal, setProceedModal] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);
    const [fundModal, setFundModal] = useState(false);
    const [bids, setBids] = useState(null);

    useEffect(() => {
        console.log('Firestore Mounted')
        db.collection('bids')
            .get()
            .then(snapshot => {
                const bids = [];
                snapshot.forEach( doc => {
                    const data = doc.data();
                    bids.push(data)
                })
                setBids(bids)
                // setLoading(true);
                console.log(bids)
                // console.log(snapshot)
            })
            .catch(error => console.log(error))
    }, []);
   
    // function for offers modal
    const handleClose = () => {
        setOffersModal(false);
    }
    const handleShow = () => {
        setOffersModal(true);
    }

    // function modals for proceed to payment
    const modalClose = () => {
        setProceedModal(false);
        setPaymentModal(false);
        setFundModal(false);
    }
    const modalShow = () => {
        setProceedModal(true);
    }

    const shownextModal = () =>{
        setProceedModal(false);
        setPaymentModal(true);
    }
    const showFundModal = () =>{
        setPaymentModal(false);
        setFundModal(true);

    }

    return (
        <div>
            <div>
                <div className="offer_jumbotron">
                    <PagesNav />
                    <div className="container">
                        <div className="row offer_row">
                        <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <p className="offer_title">Choose Dispatch Provider</p>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-10">
                                        <p className="offer_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                {/* All Offers Body */}
                <section className="offers_body">
                    <div className="container">
                    {(bids != null && bids.length <=0) ?
                        <div className="col-md-12"  style={{justifyContent:'center'}}> 
                            <h5>No offers made yet, to deliver you package.</h5>
                        </div>
                        :
                        <>
                            <div className="row">
                                <div className="col-xl-3 mb-5">
                                    <div className="card filter_card">
                                        <div className="offers_filter">
                                            <p className="filter_header pb-4">Filters</p>
                                            <p className="filter_text">Select Amount</p>
                                        </div>
                                        <div className="row pl-0">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-9">
                                            <Range
                                                values={values}
                                                step={STEP}
                                                min={MIN}
                                                max={MAX}
                                                onChange={values => {
                                                    console.log(values);
                                                    setValues(values);
                                                }}
                                                // formatLabel={value => `${value}cm`}
                                                
                                                renderTrack={({ props, children }) => (
                                                    <div
                                                    // className="range"
                                                    onMouseDown={props.onMouseDown}
                                                    onTouchStart={props.onTouchStart}
                                                    style={{
                                                        ...props.style,
                                                        height: "36px",
                                                        display: "flex",
                                                        width: "100%",
                                                    }}
                                                    >
                                                    <div
                                                        ref={props.ref}
                                                        style={{
                                                        height: "3px",
                                                        width: "100%",
                                                        borderRadius: "3px",
                                                        background: getTrackBackground({
                                                            values,
                                                            colors: ["#ccc", "#0BE05C", "#ccc"],
                                                            min: MIN,
                                                            max: MAX
                                                        }),
                                                        alignSelf: "center"
                                                        }}
                                                    >
                                                        {children}
                                                    </div>
                                                    </div>
                                                )}
                                                renderThumb={({ props, isDragged }) => (
                                                    <div
                                                    {...props}
                                                    style={{
                                                        ...props.style,
                                                        height: "15px",
                                                        width: "15px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "#0BE05C",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        boxShadow: "0px 2px 6px #AAA"
                                                    }}
                                                    >
                                                    </div>
                                                )}
                                                />
                                            </div>
                                            <div className="col-md-2"></div>
                                        </div>
                                        <div className="offers_filter">
                                            <p className="filter_header">Rating</p>
                                            <div>
                                                <select className="custom-select">
                                                    <option defaultValue="1">1 Star</option>
                                                    <option defaultValue="1">2 Stars</option>
                                                    <option defaultValue="1">3 Stars</option>
                                                    <option defaultValue="1">4 Stars</option>
                                                </select>
                                                <div className="input_group pt-3">
                                                    <Link className="block filter_button" to="#">Apply Filter</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        { bids &&
                                            bids.map((bid,i) => {
                                            return (
                                            <div key={i} className="col-md-6 col-xl-4 mb-3">
                                                <div className="card alloffers_card">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <div className="gig_img">
                                                                <img src={bid.logo} alt="logo" height="150%" width="150%"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="alloffer_text pl-2">
                                                                <Link 
                                                                    to="#"
                                                                    className="alloffer_subtext"  
                                                                    onClick={handleShow}>
                                                                        <p className="alloffer_subtext mb-0">
                                                                            {bid.business_name}
                                                                        </p>
                                                                </Link>
                                                                {/* modal for details of company selected */}
                                                                <OffersModal
                                                                    offersModal={offersModal} 
                                                                    handleClose={handleClose}
                                                                    parcel_id={bid.parcel_id}
                                                                    bid_id={bid.mongo_id}
                                                                    logo={bid.logo}
                                                                    business_name={bid.business_name}
                                                                    email={bid.email} 
                                                                    contact={bid.contact_person}
                                                                    location={bid.location}
                                                                    address={bid.address}
                                                                    phone={bid.phone}
                                                                />
                                                                <div className="row">
                                                                    <div className="col-4 rating_star">
                                                                        <p className="rating_text mb-0 pt-1">{bid.rating} Stars</p>
                                                                        {/* <img src={stars} alt="rating" width="100%" height="50%"/> */}
                                                                    </div>
                                                                    <div className="col-8 rating_style p-0">
                                                                        {/* <p className="rating_text mb-0 pt-1">2.3k</p> */}
                                                                    </div>
                                                                </div>
                                                                <p className="offer_card_item">{bid.no_of_completed} delivery(ies) completed</p>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                        <p className="offer_price">₦{bid.price}</p>
                                                                    </div>
                                                                    <div className="col-6 pl-0 alloffer_button">
                                                                        <Link className="offer_button" to="#" onClick={modalShow}>Proceed</Link>
                                                                        {/* modal for the proceed button */}
                                                                        <ProceedModal 
                                                                            loading={loading}
                                                                            price={bid.price} 
                                                                            business_name={bid.business_name} 
                                                                            parcel_id= {bid.parcel_id} 
                                                                            bid_id={bid.mongo_id}
                                                                            recipient_address={bid.recipient_address}
                                                                            recipient_name={bid.recipient_name}
                                                                            senders_name={bid.senders_name}
                                                                            proceedModal={proceedModal}
                                                                            modalClose={modalClose} 
                                                                            shownextModal={shownextModal} 
                                                                        />
                                                                        {/* modal inside the proceed modal */}
                                                                        <PaymentModal 
                                                                            business_logo={bid.logo}
                                                                            business_name={bid.business_name}
                                                                            price={bid.price} 
                                                                            parcel_id={bid.parcel_id}
                                                                            bid_id={bid.mongo_id}
                                                                            senders_name={bid.senders_name}
                                                                            order_number={bid.order_number}
                                                                            business_id={bid.business_id}
                                                                            proceedModal={paymentModal} 
                                                                            showFundModal={showFundModal} 
                                                                            modalClose={modalClose}
                                                                        />
                                                                        <FundModal 
                                                                            // paymentModal={fundModal}
                                                                            modalClose={modalClose} 
                                                                            fundModal={fundModal}
                                                                        />
                                                                    </div>
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
                                </div>
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

export default Allofers;