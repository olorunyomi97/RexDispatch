import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from 'react-router-dom';
import TopNav from '../../partials/topnav';
import SideNav from '../../partials/sidenav';
import { PaystackButton } from 'react-paystack';
import { subscription as paystack_sub} from '../../../redux/business/subscription/subAction';
import './subscribe.css'


const Subscribe = (data) => {
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);
    const [subscription, setSubscription] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [reference, setReference] = useState(`T${Date.now().toString()}`)

    const handlePaystackSuccessAction = (reference, id) => {
        setReference(`T${Date.now().toString()}`)


        let data = {
            payment_ref: reference.trxref,
            subscription_type_id: id,
            payment_channel: "paystack",
            // gateway_response: "reference"
        }

        dispatch(paystack_sub(data))
        .then(() => {
            alert('success')
        })
        .catch(() => {
            setLoading(false);
        })
    
    };

    const handlePaystackCloseAction = () => {
        setReference(`T${Date.now().toString()}`)
        console.log('closed')
    }

    
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + "/business/subscription_type/get_subscription_type", data)
        .then(data => {
            // console.log(data);
            setSubscription(data.data.data)
        });
    },[data, API_URL]);
    
    return (
        <div className="subscribe">
            <section>
                <div className="row">
                    <div className="col-md-4">
                        <SideNav />
                    </div>
                    <div className="col-md-8">
                    <TopNav />
                    
                    <div className="row pl-2 pr-2">
                        <div className="col-3">
                            <Link className="link" to="/"><p className="back"><i className="fas fa-chevron-left mr-3 hide"></i>Back</p></Link>
                        </div>
                        <div className="col-6 pr-0">
                            <p className="register_body pl-2">Choose Your Plan</p>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    {message && (
                                        <div className="form-group">
                                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert" style={{textTransform: 'capitalize'}}>
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="col-3">
                            <Link className="link" to="/dispatch-request"><p className="back"><span className="skip">Skip</span></p></Link>
                        </div>
                        </div>
                        {
                        subscription && subscription.map((subscribe,i ) => {
                            console.log(Subscribe);
                            const config = {
                                reference: reference,
                                email: "user@example.com",
                                amount: subscribe.amount * 100,
                                publicKey: 'pk_test_7ef0929bad6cd1b77c44d66f876cc049e8be89d9',
                            };
                            const componentProps = {
                                ...config,
                                text: 'Proceed',
                                onSuccess: (reference) => handlePaystackSuccessAction(reference, subscribe._id),
                                onClose: handlePaystackCloseAction,
                            };
                        return (
                        <div className="row pl-3 pr-3">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 subscription">
                                <div className="card subscription_card mb-5">
                                    <div key={i} data={subscribe} className="row">
                                        <div className="col-6 pt-3">
                                            <p className="subscribe_text" style={{textTransform: 'capitalize'}}>{ subscribe.plan }</p>
                                        </div>
                                        <div className="col-6 pt-3">
                                            <p className="subscribe_subtext">{subscribe.amount} <span className="subscribe_item">/ month</span></p>
                                        </div>
                                    </div>
                                    <p className="subscription_text"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>1 - {subscribe.dispatch_rides} dispatch rides</p>
                                    <p className="subscription_text mb-5"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>Max of {subscribe.features} deliveries monthly</p>
                                    <div className="row">
                                        <div className="col-1"></div>    
                                        <div className="col-10 mb-4">
                                         <PaystackButton {...componentProps} className="block register_submit" to="#"Proceed />
                                        </div>
                                        <div className="col-1"></div>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        )})
                        }
                    </div>
                </div>
            </section>
        </div> 
    )
}

export default Subscribe;