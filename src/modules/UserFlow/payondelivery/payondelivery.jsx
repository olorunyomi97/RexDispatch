import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logo from '../../../img/logo/logo.png';
import delivery from '../../../img/images/delivery.png'
import SideNav from '../../partials/sidenav';
import 'react-phone-input-2/lib/style.css';
import CancelRequestModal from './cancelrequestmodal';
import './payondelivery.css'


const Payondelivery = (props) => {
    // const { data } = props.location.state;
    // console.log(data)

    const [showModal, setShowModal] = useState(false);
    const modalClose = () => {
        setShowModal(false);
    }
    const modalShow = () => {
        setShowModal(true);
    }
    return (
        <div>
           <div>
                <div className="parcel">
                <section>
                    <div className="row">
                        <div className="col-md-4">
                            <SideNav />
                        </div>
                        <div className="col-md-8">
                            {/* Register Nav Section */}
                            
                            <div className="row">
                                <div className="col-md-3">
                                   {/* <Link className="link" to="/"><p className="back"><i className="fas fa-chevron-left mr-3 hide"></i>Back</p></Link> */}
                                </div>
                                <div className="col-md-6 pl-4 pr-3">
                                    <div className="pt-5">
                                        <img src={delivery} alt="delivery"/>
                                    </div>
                                    <p className="delivery_body pl-2">Pay on delivery only</p>
                                    <div className="card delivery_card">
                                        <div className="pt-3 pb-2">
                                            <p className="delivery_text mb-1">Delivery</p>
                                            <p className="delivery_subtext mb-1">N30000</p>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="payment_madeby">payment to be made by? </p>
                                        {/* <label className="container_checkbox"><p className="sender">Sender</p>
                                            <input type="checkbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="container_checkbox"><p className="sender">Reciever</p>
                                            <input type="checkbox"/>
                                            <span className="checkmark"></span>
                                        </label> */}
                                        <div className="form-check" style={{textAlign:'left'}}>
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="flexRadioDefault" 
                                                id="flexRadioDefault1"
                                                style={{borderColor:'grey'}}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Sender
                                            </label>
                                        </div>
                                        <div className="form-check" style={{textAlign:'left'}}>
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="flexRadioDefault" 
                                                id="flexRadioDefault2" 
                                                style={{borderColor:'grey'}}
                                                defaultChecked
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Reciever
                                            </label>
                                        </div>
                                        <p className="delivery_message mt-2">A message will be sent to the recipient for confirmation via text.</p>
                                    </div>
                                    <div className="mt-5">
                                    <Link className="block register_submit" to="/order-placed" >Continue</Link>
                                    <Link className="link" to="#"><p className="payon_delivery" style={{color: "#FD3538"}} onClick={modalShow}>Cancel Request</p></Link>
                                    <CancelRequestModal showModal={showModal} modalClose={modalClose}/>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            
                            
                        </div>
                    </div>
                </section>
            </div>
            </div> 
        </div>
    )
}

export default Payondelivery;