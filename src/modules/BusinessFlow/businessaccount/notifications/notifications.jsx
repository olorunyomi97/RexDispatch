import React, { useState, useEffect } from 'react';
import axios from "axios";
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import Footer from '../../../footer/footer';

const Notifications = (data) => {

    const [notifications, setNotifications] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + '/general/notification/get_notifications?model=business' ,data)
        .then(data => {
            console.log(data.data.data)
            setNotifications(data.data.data)
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
                            {/* Notifications for business owner */}
                            <div className="notification mt-5">
                                <div className="container">
                                    {(notifications != null && notifications.length <=0) ? 
                                        <div style={{justifyContent:'center'}}> 
                                            <h5 className="pt-3">You have no notifications yet.</h5>
                                        </div>
                                        : 
                                        <>
                                            {
                                                notifications && notifications.map((notify, key) => {
                                                    return key <= 9 ?
                                                    (
                                                        <div key={key} data={notify}  className="row pl-5">
                                                            <div className="col-10">
                                                                <p className="notification_text">{notify.details}</p>
                                                                <p className="notification_time">J{notify.createdAt}</p>
                                                            </div>
                                                            <div className="col-2">
                                                                <span className="dot" style={{backgroundColor:"#0BE05C"}}></span>
                                                            </div>
                                                            <hr className="notification_hr"/>
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
export default Notifications;