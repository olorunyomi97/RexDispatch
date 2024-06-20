import React from 'react';
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cancelrequestmodal = (props) => {
    return (
        <div>
            <Modal show={props.showModal} onHide={props.modalClose}>
                <div className="row pl-3 pr-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 pb-4 pt-5">
                        <p className="cancel_request mb-5">Please select the reason for cancellation:</p>
                        <div className="mt-3">
                        <div className="form-check" style={{textAlign:'left'}}>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id="flexRadioDefault1"
                                style={{borderColor:'grey'}}
                            />
                            <label className="form-check-label mb-3" htmlFor="flexRadioDefault1">
                                Delivery not needed
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
                            <label className="form-check-label mb-3" htmlFor="flexRadioDefault2">
                                Delivery time
                            </label>
                        </div>
                        <div className="form-check" style={{textAlign:'left'}}>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id="flexRadioDefault1"
                                style={{borderColor:'grey'}}
                            />
                            <label className="form-check-label mb-3" htmlFor="flexRadioDefault1">
                                Not going again
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
                            <label className="form-check-label mb-3" htmlFor="flexRadioDefault2">
                                Too expensive
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
                            <label className="form-check-label mb-3" htmlFor="flexRadioDefault2">
                                Others
                            </label>
                        </div>
                        </div>
                        <textarea type="text" className="textarea_input form-control mb-5" placeholder="Additional comments.." rows="3" />
                        <Link className="block register_submit mb-5" to="#" >Cancel Delivery</Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Modal>
        </div>
    )
}

export default Cancelrequestmodal;
