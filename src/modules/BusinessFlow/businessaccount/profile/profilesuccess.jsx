import React from 'react';
import { Modal } from "react-bootstrap";
import thumb from "../../../../img/images/thumb.png"
import { Link } from "react-router-dom";

export default function profilesuccess(props) {
    return (
        <div>
            <Modal show={props.profileModal} onHide={props.modalClose}>
                <div className="row pl-3 pr-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 profile_success_modal">
                        <img className="pt-5" src={thumb} alt="logo" /> 
                        <p className="modal_text">Your account verification is being processed</p>
                        <p className="modal_subtext_2 pb-3">Your documents has been submitted, if valid your account will be verified within 24 hours.</p>
                        <Link className="block register_submit" to="#" >See available orders</Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Modal> 
        </div>
    )
}
