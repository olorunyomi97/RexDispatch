import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';

export default function Registerbusinessmodal(props) {
    const [otp, setOtp] = useState();
    return (
        <div>
           <Modal show={props.showModal} onHide={props.modalClose}>
               {/* <Modal.Header closeButton> */}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 pb-5">
                        <p className="modal_text pt-5">Business Verification</p>
                        <p className="modal_subtext pr-2 pl-2">Enter the OTP we have sent to your mobile phone 7062584834</p>
                        <div className="row pt-3 pb-5 otp">
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
                        <div className="row ">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <p>Didnt get the code?<span style={{color: "#0BE05C"}}><Link className="link" to="/"> Resend code </Link></span></p>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <p className="">Not your number? <span style={{color: "#0BE05C"}}><Link className="link"to="/">Change number</Link></span></p>
                        {/* <Link className="block register_submit" to="/" data-toggle="modal" data-target="#registration-successful">Register Business</Link> */}
                        <div className="input_group mt-5 pr-3 pl-3">
                            <Link className="block register_submit" to="#"onClick={props.shownextModal}>Register Business</Link>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                {/* </Modal.Header> */}
            </Modal> 
        </div>
    )
}
