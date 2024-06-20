import React, { useState } from 'react';
import { useDispatch} from "react-redux";
import { Modal } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import { PaystackButton } from 'react-paystack';
import { pay } from '../../../redux/user/transaction/payAction'
// import paystack from "../../../img/images/paystack.png"
import logo from '../../../img/logo/logo.png';


const Paymentmodal = (props) => {
    const history = useHistory();
    console.log(props)
    const dispatch = useDispatch();
    // const {amount, payment_ref, parcel_id, bid_id, gateway_response, payment_channel, senders_name, price} = props;
    const 
    { 
        price, 
        parcel_id, 
        bid_id, 
        senders_name, 
        order_number, 
        business_id, 
        business_logo,
        business_name 
    } = props;

    const [reference, setReference] = useState(`T${Date.now().toString()}`)
    const config = {
        reference: reference,
        email: "user@example.com",
        amount: price * 100,
        publicKey: 'pk_test_7ef0929bad6cd1b77c44d66f876cc049e8be89d9',
    };
    // console.log(reference);

    const handlePaystackSuccessAction = (reference, id) => {
        setReference(`T${Date.now().toString()}`)
        
        let data = {
            amount: price,
            payment_ref: reference.trxref,
            parcel_id: parcel_id,
            bid_id : bid_id,
            gateway_response : Response,
            payment_channel : 'paystack'
        }
        // dispatch(pay( bid_id, parcel_id ,gateway_response ,payment_channel, payment_ref, amount ))
        dispatch(pay( data ))
        .then(() => {
            history.push("/order-placed", { bid_id, parcel_id, senders_name, order_number, business_id, business_logo, business_name  } );
            // window.location.reload();
        })
        .catch(() => {alert('nonsense')})
    };
  
    const handlePaystackCloseAction = () => {
    console.log('closed')
    }
  
    const componentProps = {
        ...config,
        text: 'Pay with Card',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    // const payonDelivery = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setSuccessful(false);
    //     props.history.push('/pay-on-delivery', {price, parcel_id, bid_id, senders_name})

    // };
  

    return (
        <div>
           <Modal show={props.proceedModal} onHide={props.modalClose}>
                <div className="row pl-3 pr-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 pb-2">
                        <img className="pt-5" src={logo} alt="logo" /> 
                        <p className="paystack_email">Dear <span className="proceed_span">{senders_name}</span>, Would you like to pay with your card or your wallet?</p>
                        <p className="paystack_amount"> ₦{ price }</p>
                        <div className="mb-5">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"style={{justifyContent: "center"}} >
                                {/* <li className="nav-item payment_tab">
                                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-home">Pay With Wallet</button>
                                </li> */}
                                <li className="nav-item payment_tab">
                                    <PaystackButton {...componentProps} className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-profile" />
                                </li>
                            </ul>
                            {/* <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Chubby</div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Neckbones</div>
                            </div> */}
                        </div>
                        <div className="row pb-3">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <Link className="block register_submit" to="#"onClick={props.showFundModal} >Top Up your wallet</Link>
                        {/* <FundModal fundModal={fundModal} modalClose={modalClose}/> */}
                        <Link 
                            className="link" 
                            to={{
                                pathname:"/pay-on-delivery",
                            }}
                            
                        >
                            <p className="payon_delivery" style={{color: "#0BE05C"}}>Pay on Delivery</p>
                        </Link>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Modal> 
        </div>
    )
}

export default Paymentmodal;