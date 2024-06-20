import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import Footer from '../../../footer/footer';
import UserTab from '../../../partials/usertab';
import Moment from 'react-moment';
import './dispatchhistory.css'

 const Dispatchhistory = (data) => {

    const [dispatchhistory, setDispatchhistory] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios.get(API_URL + '/parcel/dispatch_history/?model=customer', data)
        .then(data => {
            console.log(data.data.data);
            setDispatchhistory(data.data.data)
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
                            <UserTab />
                            {/* dispatch History table */}
                            <div className="container wallet_table">
                                <div className="p-5">
                                    {(dispatchhistory != null && dispatchhistory.length <=0) ? 
                                        <div style={{justifyContent:'center'}}> 
                                            <h5 className="pt-3">No Packages set to be dispatched yet.</h5>
                                        </div>
                                        :
                                        <>
                                        <Table hover>
                                            <thead>
                                                <tr className="table_title">
                                                    <th className="table_item p-3" style={{borderRadius:"20px 0px 0px 0px"}}>Date</th>
                                                    <th className="table_item p-3">Order Number</th>
                                                    <th className="table_item p-3">Recipient's Name</th>
                                                    <th className="table_item p-3">Delivery Address</th>
                                                    <th className="table_item p-3" style={{borderRadius:"0px 20px 0px 0px"}}>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table_body">
                                            {
                                                dispatchhistory && dispatchhistory.map((history,i) => {
                                                    return (
                                                    <tr key={i} data={history}>
                                                        <td className="table_item2 p-3"><Moment format='DD-MM-YY'>{history.createdAt}</Moment></td>
                                                        <td className="table_item2 p-3"><Link className="dispatch_link2" to={`/user-dispatch-history-details/${history._id}`}>{history.order_number}</Link></td>
                                                        <td className="table_item2 p-3"><Link className="dispatch_link2" to={`/user-dispatch-history-details/${history._id}`}>{history.recipient_name}</Link></td>
                                                        <td className="table_item2 p-3"><Link className="dispatch_link2" to={`/user-dispatch-history-details/${history._id}`}>{history.delivery_address}</Link></td>
                                                        <td className="table_item2 p-3" style={{textTransform: 'capitalize'}}><Link className="dispatch_link2" to={`/user-dispatch-history-details/${history._id}`}>{history.status}</Link></td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </Table>
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

export default Dispatchhistory