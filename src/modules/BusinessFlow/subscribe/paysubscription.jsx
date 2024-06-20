import React from 'react';
import { Link } from 'react-router-dom';

const paysubscription = ({subs, plan}) => {
    return (
        <div>
            <div className="row pl-2 pr-2">
                <div className="col-3">
                    <Link className="link" to="/"><p className="back"><i className="fas fa-chevron-left mr-3 hide"></i>Back</p></Link>
                </div>
                <div className="col-6 pr-0">
                    <p className="register_body pl-2">Choose Your Plan</p>
                </div>
                <div className="col-3">
                    <Link className="link" to="/dispatch-request"><p className="back"><span className="skip">Skip</span></p></Link>
                </div>
            </div>
            {
            subs.map((sub, kew) =>{
            return (
            <div key={sub.id} className="row pl-3 pr-3">
                <div className="col-md-3"></div>
                <div className="col-md-6 subscription">
                    <div className="card subscription_card mb-5">
                        <div className="row">
                            <div className="col-6 pt-3">
                                <p className="subscribe_text">{ sub.plan }</p>
                            </div>
                            <div className="col-6 pt-3">
                                <p className="subscribe_subtext">20,000 <span className="subscribe_item">/ month</span></p>
                            </div>
                        </div>
                        <p className="subscription_text"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>1 - 10 dispatch rides</p>
                        <p className="subscription_text mb-5"><i className="fas fa-check pl-4 mr-3" style={{color: '#0BE05C'}}></i>Max of 50 deliveries monthly</p>
                        <div className="row">
                            <div className="col-1"></div>    
                            <div className="col-10 mb-4">
                                <Link className="block register_submit" to="#" >Proceed</Link>
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
    )
}

export default paysubscription;