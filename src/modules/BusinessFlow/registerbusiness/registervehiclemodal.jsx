import React from 'react';
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import thumb from "../../../img/images/thumb.png";

export default function Registervehiclemodal(props) {
    return (
        <div>
            <Modal show={props.showModal} onHide={props.modalClose}>
            {/* <Modal.Header > */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 pb-5">
                        <img className="pt-5" src={thumb} alt="logo" /> 
                        <p className="modal_text">Congratulations</p>
                        <div className="row pb-3 pr-3 pl-3">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                            <p className="modal_subtext_2 pb-3">Gokada Logistics has been successfully registered</p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="pl-3 pr-3">
                            <Link className="block register_submit" to="/register-vehicle" >Register your Vehicles</Link>
                            <Link className="link" to="/"><p className="modal_minitext" style={{color: "#0BE05C"}}>Go Back</p></Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            {/* </Modal.Header> */}
            </Modal>
        </div>
    )
}

