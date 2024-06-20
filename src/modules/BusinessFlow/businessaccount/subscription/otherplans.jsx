import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useHistory, Redirect } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import Footer from '../../../footer/footer';
import { PaystackButton } from 'react-paystack';
import { subscription as paystack_sub} from '../../../../redux/business/subscription/subAction';
import './subscription.css'

const Otherplans = (data) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);
    const [otherPlans, setOtherlans] = useState(null);
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
        .then(() => {alert('success')
        .then(() => {
            history.push("/business-account");
            window.location.reload();
        })
        })
        .catch(() => {alert('nonsense')
            setLoading(false);
        }).then(() => {
            history.push("/other-subscription-plans");
            window.location.reload();
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
            setOtherlans(data.data.data)
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
                        <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    {message && (
                                        <div className="form-group">
                                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert" style={{textTransform: 'capitalize'}}>
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row pl-5 pt-5">
                            {
                                otherPlans && otherPlans.map((upgrade,idx) =>{
                                    const config = {
                                        reference: reference,
                                        email: "user@example.com",
                                        amount: upgrade.amount * 100,
                                        publicKey: 'pk_test_7ef0929bad6cd1b77c44d66f876cc049e8be89d9',
                                    };
                                    const componentProps = {
                                        ...config,
                                        text: 'Proceed',
                                        onSuccess: (reference) => handlePaystackSuccessAction(reference, upgrade._id),
                                        onClose: handlePaystackCloseAction,
                                    };

                                    return (
                                    <div className="col-md-5">
                                        <div className="card subscription_card mb-5">
                                            <div>
                                                <div key={idx} data={upgrade}  className="row">
                                                    <div className="col-6 pt-3">
                                                        <p className="subscribe_text" style={{textTransform:'capitalize'}}>{upgrade.plan}</p>
                                                    </div>
                                                    <div className="col-6 pt-3">
                                                        <p className="subscribe_subtext">{upgrade.amount}<span className="subscribe_item mr-2">/ month</span><i className="fas fa-check-circle" style={{color: '#0BE05C'}}></i></p>
                                                    </div>
                                                </div>
                                                <p className="subscription_text"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>1 - {upgrade.features} dispatch rides</p>
                                                <p className="subscription_text mb-5"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>{upgrade.features} monthly</p>
                                                <div className="row">
                                                    <div className="col-1"></div>    
                                                    <div className="col-10">
                                                        <PaystackButton {...componentProps} className="block register_submit mb-5" to="#"Proceed />  
                                                        {/* <Link className="link" to="#"><p className="modal_minitext" style={{ color: "black" }}>Cancel</p></Link> */}
                                                    </div>
                                                    <div className="col-1"></div>  
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
                </div>
            </div>
            </section>
            <Footer />
        </div>
    )
}
export default Otherplans;