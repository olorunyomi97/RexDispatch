import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CheckButton from "react-validation/build/button";
import { Modal } from "react-bootstrap";
import { createbid } from "../../../redux/business/bid/bidAction";
import Form from "react-validation/build/form";

 const Bidmodal = (props, data) => {
    const { parcel_id } = props;
    // console.log(parcel_id);
    const checkBtn = useRef();
    const form = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [price, setPrice] = useState('');
    const [riders, setRider] = useState(null);
    const [rider_id, setRiderID] = useState();
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);

    

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + "/business/dispatcher/get_dispatcher", data)
        .then(data => {
            setRider(data.data.data)
        });
    },[data,API_URL]);

    const onChangePrice = (e) => {
        const price = e.target.value;
        setPrice(price)
    };
    // const onChangeRider = (e) => {
    //     const rider = e.target.value;
    //     setRider(rider)
    // };

    const handleBid = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) 
        {
            dispatch(createbid(price, rider_id, parcel_id))
            .then(() => {
                history.push('/bid-successful');
                window.location.reload();
            })
            .catch(() => {alert('nonsense')})
        } 
    };

    return (
        <div>
        <Modal show={props.showBidModal} onHide={props.modalClose}>
        
            <div className="row pl-3 pr-3">
                <div className="col-md-2"></div>
                <div className="col-md-8 pb-4 pt-5">
                    {message && (
                        <div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert" style={{textTransform: 'capitalize'}}>
                                {message}
                            </div>
                        </div>
                    )}
                    <Form onSubmit={handleBid} ref={form}>
                        <p className="bid_modal_title">Make A Bid</p>
                        <div className="input_group pt-3 mb-4">
                            <p className="dispatch_input_title mb-2">Amount</p>
                            <input 
                                type="number" 
                                className="register_input form-control" 
                                placeholder="Enter Amount" 
                                value={price}
                                onChange={onChangePrice}
                                required={true}
                            />
                        </div>
                        <div className="input_group mb-4">
                            <p className="dispatch_input_title mb-2">Choose Dispatch Rider</p>
                            <select 
                                className="custom-select"
                                name="_id"
                                onChange={e => {
                                    let {name, value} = e.target;
                                    console.log(value)
                                    setRiderID(value);
                                }}
                                >
                                { riders && riders.map((rider,ride) => {
                                    return (
                                        <option key={ride} value={rider._id}>
                                            {rider.firstname} {rider.lastname}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="input_group pt-3 pb-5">
                            <button className="block register_submit">
                                {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                <span>Complete Bid</span>
                            </button>
                        </div>
                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>
                </div>
                <div className="col-md-2"></div>
            </div>
            
        </Modal>
        </div>
    )
}
export default Bidmodal;