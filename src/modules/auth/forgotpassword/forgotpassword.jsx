import React, {useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import SideNav from '../../partials/sidenav';
import PhoneInput from 'react-phone-input-international';
import { forgotpassword } from '../../../redux/general/auth/authActions';

const user_role = JSON.parse(localStorage.getItem("user_role"));
// console.log(user_role)
const Forgotpassword = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();
    const [phone, setPhone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [setSuccessful] = useState(false);

    // const onChangePhone = (e) => {
    //     const phone = e.target.value;
    //     setPhone(phone);
    // };

    const handleForgotpassword = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            // const user_category = localStorage.getItem("user_category")
            dispatch(forgotpassword(phone, user_role.user_category))
              .then(() => {
                props.history.push("/processpassword", {phone});
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
            <div className="register"> 
                <section>
                    <div className="row">
                        <div className="col-md-4">
                            <SideNav />
                        </div>
                        <div className="col-md-8">
                            {/* Register Nav Section */}
                            <div className="register_navigation row hide">
                            </div>
                            {/* Register Nav Section */}
                            {/* Register Input */}
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 pr-0">
                                    <p className="register_body pl-2">Forgotten Password?</p>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 registration">
                                <Form className="form" onSubmit={handleForgotpassword} ref={form}> 
                                    <div className="register_form">
                                    <div className="input_group">
                                        <p className="input_title mb-2">Phone Number</p>
                                        <PhoneInput
                                            className="register_input form-control"
                                            placeholder="Phone Number"
                                            name="phone"
                                            country='ng'
                                            value={phone}
                                            onChange={setPhone}
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
                            <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Forgotpassword