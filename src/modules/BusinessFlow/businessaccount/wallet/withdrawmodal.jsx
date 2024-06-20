import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { PaystackButton } from 'react-paystack';
import { withdrawfunds } from '../../../../redux/business/wallet/walletAction';

const Withdrawmodal = (props) => {
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
        amount: amount,
        publicKey: 'pk_test_7ef0929bad6cd1b77c44d66f876cc049e8be89d9',
    };

    const handlePaystackSuccessAction = (reference) => {
        setReference(`T${Date.now().toString()}`)

        let data = {
            payment_ref: reference.trxref,
            // amount: amount,
            // payment_channel: "paystack",
        }
        dispatch(withdrawfunds(data))
        // .then(() => {alert('withdraw successful')})
        .then(() => {
            history.push("/business-account");
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
        text: 'Withdraw Funds',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };


    return (
        <div>
            <Modal show={props.withdrawModal} onHide={props.toggleClose}>
            <div className="row pl-3 pr-3">
                <div className="col-md-2"></div>
                <div className="col-md-8 pb-4 pt-5">
                {message && (
                    <div className="form-group">
                        <div className={ successful ? "alert alert-success" : "alert alert-success" } role="alert"style={{textTransform: 'capitalize'}}>
                            {message}
                        </div>
                    </div>
                )}
                    <p className="bid_modal_title">Withdraw funds from to Wallet</p>
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

export default Withdrawmodal;