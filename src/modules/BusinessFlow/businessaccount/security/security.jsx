import React, { useRef, useState } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import AccountTab from '../../../partials/accounttab';
import { update_password } from '../../../../redux/business/account/security/securityAction';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import PagesNav from '../../../pagesnav/pagesnav';
import Footer from '../../../footer/footer';

const Security = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();

    const [isError, setIsError] = useState("")
    const [oldpassword, setOldpassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);

    const onChangeOldpassword = (e) => {
        const oldpassword = e.target.value;
        setOldpassword(oldpassword);
    }

    const onChangeNewpassword = (e) => {
        const newpassword = e.target.value;
        setNewpassword(newpassword);
    }

    const checkValidation = (e) => {
        const confPass = e.target.value;
        setConfirmpassword(confPass);
        if(newpassword != confPass) {
            setIsError("Passwords do not match")
        } else {
            setIsError("");
        }
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(update_password(oldpassword, newpassword))
            .then(() => { 
                props.history.push("/signin")
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            }); 
        } else {
            setLoading(true);
        }
    };

    return (
        <div className="user_account">
        <div className="user_account_jumbotron user_flex">
            <PagesNav />
            <div className="container">
                <div className="row user_account_row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <p className="user_account_title pb-5">My Account</p>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
        {/* Account body */}
        <section className="account_body"> 
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card account_card pt-3 pb-3">
                    <AccountTab />
                        {/* Profile section */}
                        <div className="container profile">
                            <div className="row pl-5 pr-5">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                {message && (
                                <div className="form-group">
                                   <div className={ successful ? "alert alert-success" : "alert alert-success" } role="alert">
                                        {message}
                                    </div>
                                </div>
                                )}
                                <Form onSubmit={handlePassword} ref={form}>
                                    <div className="input_group mt-5">
                                        <p className="profile_title mb-2">Old Password</p>
                                        <input 
                                            type="password" 
                                            className="profile_input form-control" 
                                            placeholder="Enter old Password" 
                                            value={oldpassword}
                                            onChange={onChangeOldpassword}
                                        />
                                    </div>
                                    <div className="input_group">
                                        <p className="profile_title mb-2">New Password</p>
                                        <input 
                                            type="password" 
                                            className="profile_input form-control" 
                                            placeholder="Enter new Password" 
                                            value={newpassword}
                                            onChange={onChangeNewpassword}
                                        />
                                    </div>
                                    <div className="input_group">
                                        <p className="profile_title mb-2">Confirm New Password</p>
                                        <input 
                                            type="password" 
                                            className="profile_input form-control" 
                                            placeholder="Confirm new password" 
                                            value={confirmpassword}
                                            onChange={(e) => checkValidation(e)}
                                        />
                                        <p style={{color:'red', textAlign:'left'}}>{isError}</p>
                                    </div>
                                    <div className="input_group">
                                        <button className="block register_submit" to="#">
                                            {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                            <span>Update Password</span>
                                        </button>
                                    </div>
                                    {/* <Link className="block register_submit mt-5" to="#">Update Password</Link> */}
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                </Form>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>   
                            
                    </div>
                </div>
            </div>
        </div>
        </section>
        <Footer />
    </div>
    )
}

export default Security;