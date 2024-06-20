import React from 'react';
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import gig from '../../../img/images/gig.png';

const  Offersmodal = (props) => {
    const {bid_id, business_name,logo,phone,contact,location,email,address } = props;
    // console.log(business_name)
    return (
        <div>
            <Modal className="modal-pop" size="lg" show={props.offersModal} onHide={props.handleClose}>
                <Modal.Body>
                    <div className="row pl-3 pr-3">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 pb-4 pt-5">
                            <div className="pb-5">
                                <img src={logo} alt="avatar"height="20%" width="20%"/>
                            </div>
                            <div>
                                <p className="logistics_info mb-1">Business Name</p>
                                <p className="logistics_info_text mb-0">{business_name}</p>
                                <hr className="logistics_hr mt-4 mb-4"/>
                            </div>
                            <div>
                                <p className="logistics_info mb-1">Email Address</p>
                                <p className="logistics_info_text mb-0">{email}</p>
                                <hr className="logistics_hr mt-4 mb-4"/>
                            </div>
                            <div>
                                <p className="logistics_info mb-1">Location</p>
                                <p className="logistics_info_text mb-0">{location}</p>
                                <hr className="logistics_hr mt-4 mb-4"/>
                            </div>
                            <div>
                                <p className="logistics_info mb-1">Phone Number</p>
                                <p className="logistics_info_text mb-0">{phone}</p>
                                <hr className="logistics_hr mt-4 mb-4"/>
                            </div>
                            <div>
                                <p className="logistics_info mb-1">Address</p>
                                <p className="logistics_info_text mb-0">{address}</p>
                                <hr className="logistics_hr"/>
                            </div>
                            <div>
                                <p className="logistics_info">Name of Contact Person</p>
                                <p className="logistics_info_text mb-0">{contact}</p>
                                <hr className="logistics_hr"/>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Offersmodal;