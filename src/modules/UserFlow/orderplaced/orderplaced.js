import React from 'react';
import { Link,useHistory } from "react-router-dom";
import bid from '../../../img/images/bid.png';
import SideNav from '../../partials/sidenav'
import TopNav from '../../partials/topnav';
import './orderplaced.css'

const Orderplaced = (props) => {
    const history = useHistory();
    const prop_data = props.location.state;
    console.log(prop_data)
    
    const { business_id, business_logo, business_name } = props;

    // const rateBusiness  = (e) => {
    //     history.push('/user-submit-feedback', { business_id });
    // };
    
    return (
        <div>
            <div className="order_placed">
                <div className="bid_successful">
                <section>
                    <div className="row">
                        <div className="col-md-4">
                            <SideNav />
                        </div>
                        <div className="col-md-8 pt-5">
                            {/* <TopNav /> */}
                            <div className="row mt-5">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <img src={bid} alt="logo" />
                                    <div className="mt-3 mb-5 pl-2 pr-2">
                                        <p className="bid_text">Dear <span style={{color:'#0BE05C'}}>{prop_data.senders_name}</span>, Your Order was placed successfully.</p>
                                        <div className="row mb-5">
                                            <div className="col-md-1"></div>
                                            <div className="col-md-10">
                                                <p className="bid_subtext">Your payment receipt and dispatch details has been sent to your email.</p>
                                                <p className="bid_subtext">Your order number is <span style={{color:'#0BE05C'}}>{prop_data.order_number}</span></p>
                                            </div>
                                            {/* <p>{prop_data.business_id}</p> */}
                                            <div className="col-md-1"></div>
                                        </div>
                                        <div className="mb-3">
                                            <Link className="bid_buttton"to="/create-parcel">Send another Parcel</Link>
                                        </div>
                                        {/* <div className="mt-4 parcel_tracker">
                                            <Link className="deliverables"to="/user-track-parcel">Track my Parcel</Link>
                                        </div> */}
                                        <div className="mt-4 parcel_tracker">
                                            {/* <Link 
                                                onClick = {rateBusiness}
                                                className="deliverables"
                                                to="#">
                                                    Rate business
                                            </Link> */}
                                            <Link 
                                            className="deliverables"
                                            to={{
                                                pathname:"/user-submit-feedback",
                                                business_id :prop_data.business_id,
                                                logo: prop_data.business_logo, 
                                                business_name : prop_data.business_name
                                            }}
                                            > 
                                                Rate business
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </div>
    )
}

export default Orderplaced