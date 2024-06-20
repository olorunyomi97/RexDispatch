import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import link from "../../../img/images/link.png";

export default function vehiclemodal(props) {
    return (
        <div>
            <Modal show={props.showVehicleModal} onHide={props.modalClose}>
                <div className="row pl-3 pr-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 pb-5">
                        <img className="pt-5" src={link} alt="logo" />
                        <p className="modal_text">Complete Registration</p>
                        <p className="modal_subtext_2 pb-3">An OTP has been sent to Chukwuma's phone number 07054664673 to complete the registration on his phone.</p>
                        <Link className="block register_submit" to="/register-vehicle">
                            Add Another Vehicle
                        </Link>
                        <Link className="link" to="/subscribe">
                            <p className="modal_minitext" style={{ color: "#0BE05C" }}>
                                Start Recieving Orders
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Modal>
        </div>
    );
}

