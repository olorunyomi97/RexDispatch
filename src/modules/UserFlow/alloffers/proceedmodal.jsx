import React, { useState } from 'react';
// import axios from "axios";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// import PaymentModal from './paymentmodal';

const Proceedmodal = (props, data) => {
    // const [proceed, setPreoceed] = useState(null);
    const { loading, business_name, price, recipient_name, recipient_address,senders_name } = props;

    return (
        <div>
            {loading ? (
                <div className="text-center my-3">
                    <Link to="#" className="text-success">
                        <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                        Loading Details
                    </Link>
                </div>
            ) : (
            <Modal show={props.proceedModal} onHide={props.modalClose}>
                <div className="row pl-3 pr-3">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 pb-5 pt-5">
                        <p className="proceed_title">Hi {senders_name}</p>
                        <p className="proceed_text">you have selected 
                            <span className="proceed_span"> { business_name }</span> to deliver your package to 
                            <span className="proceed_span"> {recipient_name}</span> at <span> {recipient_address} </span> for 
                            <span className="proceed_span"> N{price}.</span>
                        </p>
                        <Link className="block register_submit mb-5 mt-5" to="#"onClick={props.shownextModal}>Proceed</Link>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </Modal> 
            )}
        </div>
    )
}

export default Proceedmodal;