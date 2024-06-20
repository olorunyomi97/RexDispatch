import React, { useState, useRef } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link, useHistory, Redirect } from 'react-router-dom';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { login } from "../../../redux/general/auth/authActions";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2';
import SideNav from '../../partials/sidenav'
import TopNav from '../../partials/topnav';
import './login.css'

const user_role = JSON.parse(localStorage.getItem("user_role"));

const Login = (props) => {
    if(!user_role || user_role === undefined) {
        window.location.href = '/get-started';
    }

    const form = useRef();
    const checkBtn = useRef(); 
    const history = useHistory();
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toNext, setToNext] = React.useState(false)

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    if (toNext === true) {
        return <Redirect to={user_role.user_category == 'customer'? history.push('create-parcel'): history.push('business-account')  }/>
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(phone, password, user_role.user_category))
            .then(() => {
                user_role.user_category == 'customer' 
                ? history.push('create-parcel') 
                : history.push('business-account')
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    };

    // const navigate = (e) => {
    //     user_role.user_category == 'customer' ? history.push('/create-parcel') : history.push('/business-account')
    //     window.location.reload();
    // };

    return (
        <div>
           <div className="signin">
                <section>
                    <div className="row">
                        <div className="col-md-4">
                            <SideNav />
                        </div>
                        <div className="col-md-8">
                            <TopNav />
                            
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 pr-0">
                                    <p className="register_body pl-2 text-capitalize">{ user_role.user_category } Login</p>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 registration">
                            {message && (
                                <div className="form-group">
                                   <div className={ successful ? "alert alert-success" : "alert alert-success" } role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}
                                <Form onSubmit={handleLogin} ref={form}>
                                    <div className="register_form">
                                        <div className="input_group">
                                            <p className="input_title mb-2">Phone Number</p>
                                            <PhoneInput
                                                className="register_input form-control" 
                                                type="text"
                                                country={'ng'}
                                                name="phone"
                                                value={phone}
                                                onChange={setPhone}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Enter Password</p>
                                            <input
                                                type="password" 
                                                className="register_input form-control" 
                                                name="password"
                                                placeholder="Password" 
                                                value={password}
                                                onChange={onChangePassword}
                                            />
                                            <div className="row">
                                                <div className="col-7">
                                                    {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                    <label htmlFor="vehicle1"><p className="register_terms mb-2 ml-1 mt-4">Keep me logged in</p></label><br></br> */}
                                                </div>
                                                <div className="col-5">
                                                    <Link className="link"  to="/forgotpassword"><p className="forgot_password mt-2 mb-0">Forgot Password?</p></Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="input_group">
                                            <button className="block register_submit"> 
                                            {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                            <span>Login</span></button>
                                            <p className="account phone_signin pt-2">New to Rex Logistics? <Link className="link" to={ user_role.user_category === 'customer' ? '/register' : '/register-business' }><span className="account_text" >Register</span></Link></p>
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
    );
};

export default Login;
