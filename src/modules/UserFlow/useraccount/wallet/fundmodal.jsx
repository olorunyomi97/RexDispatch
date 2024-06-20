import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { PaystackButton } from 'react-paystack';
import { fundwallet } from '../../../../redux/user/account/wallet/walletAction';

const Fundmodal = (props, data) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);
    const [amount, setAmount] = useState(0)
    const [successful, setSuccessful] = useState(false);
    const [reference, setReference] = useState(`T${Date.now().toString()}`)

    const onChangeAmount = (e) => {
        const amount = e.target.value;
        setAmount(amount);
    };

    const config = {
        reference: reference,
        email: "user@example.com",
        amount: amount * 100,
        publicKey: 'pk_test_7ef0929bad6cd1b77c44d66f876cc049e8be89d9',
    };

    const handlePaystackSuccessAction = (reference) => {
        setReference(`T${Date.now().toString()}`)

        let data = {
            payment_ref: reference.trxref,
            // amount: amount,
            // payment_channel: "paystack",
        }
        dispatch(fundwallet(data))
        .then(() => {
            history.push("/user-account")
            window.location.reload();
        })
        .catch(() => {alert('nonsense')})
        
    }
    const handlePaystackCloseAction = () => {
        setReference(`T${Date.now().toString()}`)
        window.location.reload()
    }

    
    const componentProps = {
        ...config,
        text: 'Add Funds to wallet',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    

    return (
        <div>
            <Modal show={props.fundModal} onHide={props.modalClose}>
            <div className="row pl-3 pr-3">
                <div className="col-md-2"></div>
                <div className="col-md-8 pb-4 pt-5">
                {message && (
                    <div className="form-group">
                        <div className={ successful ? "alert alert-success" : "alert alert-success" } role="alert" style={{textTransform: 'capitalize'}}>
                            {message}
                        </div>
                    </div>
                )}
                    <p className="bid_modal_title">Add Funds to Wallet</p>
                    <div className="input_group pt-3 mb-4">
                        <p className="dispatch_input_title mb-2">Amount</p>
                        <input 
                            type="number" 
                            className="register_input form-control" 
                            placeholder="Enter Amount" 
                            required={true}
                            value={amount}
                            onChange={onChangeAmount}
                        />
                    </div>
                    {/* <div className="input_group mb-4">
                        <p className="dispatch_input_title mb-2">Choose Dispatch Rider</p>
                        
                    </div> */}
                    <div className="input_group">
                        <PaystackButton {...componentProps} className="block register_submit" to="#"Add Funds />
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            </Modal>
        </div>
    )
}

export default Fundmodal;