import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import Footer from '../../../footer/footer';
import './subscription.css'

const Subscription = (data) => {
    const [subscription, setSubscription] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + "/business/subscription/get_subscription", data)
        .then(data => {
            console.log(data.data.data);
            setSubscription(data.data.data)
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
                            <div className="row pl-5 pt-5">
                                    {(subscription != null && subscription.length <=0) ? 
                                        <div style={{justifyContent:'center'}}> 
                                            <h5 className="pt-3 pb-5">No subscription made yet. Please Subscribe</h5>
                                        </div>
                                        : 
                                        <>
                                        <div className="col-md-5">
                                            <div className="card subscription_card mb-5">
                                            {subscription && subscription.map((subscribe, k) =>{
                                                    console.log(subscribe.subscriptionType)
                                                    return (
                                                        <div key={k} data={subscribe}>
                                                            <div className="row">
                                                                <div className="col-6 pt-3">
                                                                    <p className="subscribe_text" style={{textTransform:'capitalize'}}>{subscribe.subscriptionType.length ? subscribe.subscriptionType[0].plan : " "}</p>
                                                                    {/* <p className="subscribe_text" style={{textTransform:'capitalize'}}>{subscribe.status}</p> */}
                                                                </div>
                                                                <div className="col-6 pt-3">
                                                                    <p className="subscribe_subtext">₦{subscribe.subscriptionType.length ? subscribe.subscriptionType[0].amount : " "}<span className="subscribe_item mr-2">/ month</span><i className="fas fa-check-circle" style={{color: '#0BE05C'}}></i></p>
                                                                </div>
                                                            </div>
                                                            <p className="subscription_text"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>1 - {subscribe.subscriptionType.length ? subscribe.subscriptionType[0].features : " "} dispatch rides</p>
                                                            <p className="subscription_text mb-5"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>Max of {subscribe.subscriptionType.length ? subscribe.subscriptionType[0].features : " "} deliveries monthly</p>
                                                            <div className="row">
                                                                <div className="col-1"></div>    
                                                                <div className="col-10">
                                                                    <Link className="block sub_btn" to="other-subscription-plans" >Upgrade</Link>
                                                                    <Link className="link" to="#"><p className="modal_minitext" style={{ color: "black" }}>Cancel</p></Link>
                                                                </div>
                                                                <div className="col-1"></div>  
                                                            </div>
                                                        </div>
                                    
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                        </>
                                    }
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

export default Subscription;