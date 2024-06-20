import React from 'react';
import { Modal } from "react-bootstrap";
import thumb from "../../../img/images/thumb.png"
import { Link } from "react-router-dom";

export default function verificationsuccess(props) {
    return (
        <div>
           <Modal show={props.showSuccessModal} onHide={props.handleClose}>
                <div className="row pl-3 pr-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 pb-5">
                        <img className="pt-5" src={thumb} alt="logo" /> 
                        <p className="modal_text">Congratulations</p>
                        <p className="modal_subtext_2 pb-3">Your account has been verified.</p>
                        <Link className="block register_submit" to="/create-parcel" >Send A Parcel</Link>
                        <Link className="link" to="/"><p className="modal_minitext pb-4" style={{color: "#0BE05C"}}>Go Back</p></Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Modal> 
        </div>
    )
}
