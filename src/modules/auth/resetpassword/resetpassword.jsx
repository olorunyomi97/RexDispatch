import React, {useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import PhoneInput from 'react-phone-input-international';
import { resetpassword } from '../../../redux/general/auth/authActions';
import SideNav from '../../partials/sidenav';
import './resetpassword.css'

const user_role = JSON.parse(localStorage.getItem("user_role"));
// console.log(user_role)
const Resetpassword = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();
    const [phone, setPhone] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    console.log(successful)

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeToken = (e) => {
        const token = e.target.value;
        setToken(token);
    };

    const handleResetpassword = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            // const user_category = localStorage.getItem("user_category")
            dispatch(resetpassword(phone, token, password, user_role.user_category))
              .then(() => {
                props.history.push("/updated-password");
              })
              .catch(() => {
                setLoading(false);
              });
          } else {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="order_placed">
                <div className="bid_successful">
                <section>
                    <div className="row">
                    <div className="col-md-4">
                            <SideNav />
                        </div>
                        <div className="col-md-8 ">
                            {/* Register Nav Section */}
                            <div className="register_navigation row">
                            </div>
                            {/* Bid Response Section */}
                            <div className="row pl-2 pr-3">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <Form className="form" onSubmit={handleResetpassword} ref={form}> 
                                        <div className="mt-5">
                                            {/* <p className="password_subtext">Enter the OTP we sent to your Email Address.</p> */}
                                            <div className="input_group reset_password">
                                                <p className="input_title mb-2" style={{textAlign:'left'}}>One time passcode</p>
                                                <input 
                                                    type="text" 
                                                    name="password"
                                                    className="register_input form-control"
                                                    placeholder="enter token"
                                                    value={token}
                                                    onChange={onChangeToken}
                                                />
                                            </div>
                                            <div className="input_group">
                                            <p className="input_title mb-2" style={{textAlign:'left'}}>Phone Number</p>
                                                <PhoneInput
                                                    className="register_input form-control"
                                                    placeholder="Phone Number"
                                                    name="phone"
                                                    country='ng'
                                                    value={phone}
                                                    onChange={setPhone}
                                                />
                                            </div>
                                            <div className="input_group reset_password">
                                                <p className="input_title mb-2" style={{textAlign:'left'}}>New password</p>
                                                <input 
                                                    type="password" 
                                                    name="password"
                                                    className="register_input form-control"
                                                    placeholder="new password"
                                                    value={password}
                                                    onChange={onChangePassword}
                                                />
                                            </div>
                                            <div className="input_group mt-4">
                                                <button className="block register_submit"> 
                                                {loading && (<span className="spinner-border spinner-border-sm mr-2" ></span>)} 
                                                <span>Submit</span></button>
                                            </div>
                                        </div>
                                        <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </div>
    )
}

export default Resetpassword;