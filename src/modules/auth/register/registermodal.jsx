import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import OtpInput from 'react-otp-input';

export default function Registermodal(props) {
    const [otp, setOtp] = useState();
    // const [shownextModal, setShownextModal] = useState(false);
    // const handleClose = () => {
    //     setShownextModal(false);
    // }
    // const handleShow = () =>  { 
    //     setShownextModal(true);
    // }
    return (
        <div>
            <Modal show={props.showModal} onHide={props.handleClose}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 pb-5">
                        <p className="modal_text pt-5">User Verification</p>
                        <p className="modal_subtext">Enter the OTP we have sent to your mobile phone 7062584834</p>
                        <div className="row pt-3 pb-5">
                        <div className="col-10 phone_otp">
                            <OtpInput className="otp_input"
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                separator={<span>&nbsp;&nbsp;&nbsp;</span>}
                                inputStyle={{
                                    width: "3rem",
                                    height: "3rem",
                                    margin: "0 0.5rem",
                                    fontSize: "1.5rem",
                                    borderRadius: 4,
                                    border: "2px solid #0BE05C",
                                }}
                            />
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <p>Didnt get the code?<span style={{color: "#0BE05C"}}><Link className="link" to="/"> Resend code </Link></span></p>
                            </div>
                            <div className="col-2"></div>
                        </div>
                        <p className="pb-3">Not your number? <span style={{color: "#0BE05C"}}><Link className="link"to="/">Change number</Link></span></p>
                        <div className="col-12">
                            <Link className="block register_submit mb-5" to="#" onClick={props.shownextModal}>Register Account</Link>

                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Modal>
        </div>
    )
}
