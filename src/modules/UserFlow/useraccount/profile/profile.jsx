import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import axios from "axios";
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import UserTab from '../../../partials/usertab';
import Footer from '../../../footer/footer';
import avatar from '../../../../img/images/avatar.png';
import { updateprofile } from "../../../../redux/user/account/profile/profileActions";
import './profile.css'

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-success" role="alert">
          This field is required!
        </div>
      );
    }
};

const Profile = (props, data) => {
    const checkBtn = useRef();
    const form = useRef();
    const dispatch = useDispatch();
    const [profile, setProfile] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector(state => state.message);

    const [new_data, setNew_data] = useState({})
    const profileUpdate = (e) => {
        new_data[e.target.name] = e.target.value
        setNew_data({
            ...new_data
        })
    };

    const handleprofileUpdate = (e) => {
        console.log(new_data)
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            // console.log(fleet_id)
            dispatch(updateprofile ( new_data )
                ).then(() => {
                props.history.push("/user-profile");
                window.location.reload();
              })
              .catch(() => {
                setLoading(false);
              });
          } else {
            setLoading(false);
        }
    };


    const API_URL = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios.get(API_URL + '/customer/customer_profile' ,data)
        .then(data => {
            console.log(data.data.data)
            setProfile(data.data.data)
        });
    },[data, API_URL]);

    // const [new_data, setNew_data] = useState({})
    // let data = {}
    // const profileUpdate = (e) => {
    //     new_data[e.target.name] = e.target.value
    //     console.log(data)
    //     setNew_data({
    //          ...new_data
    //     })
    // };
    
    // const handleProfile = (e) => {
    //     console.log(new_data)
    //     e.preventDefault();
    //     setLoading(true);
    //     setSuccessful(false);
    //     form.current.validateAll();
    //     if (checkBtn.current.context._errors.length === 0) {
    //         dispatch(updateprofile  ( new_data )
    //             ).then(() => {
    //             props.history.push("/user-profile");
    //             window.location.reload();
    //           })
    //           .catch(() => {
    //             setLoading(false);
    //           });
    //       } else {
    //         setLoading(false);
    //     }
    // };

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
                    <UserTab />
                        {/* Profile section */}
                        <div className="profile">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                {message && (
                                    <div className="form-group">
                                        <div className={ successful ? "alert alert-success" : "alert alert-success" } role="alert" style={{textTransform:'capitalize'}}>
                                            {message}
                                        </div>
                                    </div>
                                )}
                                <Form onSubmit={handleprofileUpdate} ref={form}>
                                <div className="mt-5 mb-5">
                                    <img src={avatar} alt="avatar"/>
                                </div>
                                <div className="input_group mt-3">
                                    <p className="profile_title mb-2">First Name</p>
                                    <input 
                                        type="text" 
                                        className="profile_input form-control" 
                                        placeholder="First Name" 
                                        name="firstname"
                                        onChange={profileUpdate}
                                        defaultValue={profile.firstname}
                                        validations={[required]}
                                        // defaultValue={currentvalue && currentvalue.firstname}
                                        // onChange={(e) => {setCurrentvalue(e.target.value)}}
                                    />
                                </div>
                                <div className="input_group">
                                    <p className="profile_title mb-2">Last Name</p>
                                    <input 
                                        type="text" 
                                        className="profile_input form-control" 
                                        placeholder="Last Name" 
                                        name="lastname"
                                        onChange={profileUpdate}
                                        defaultValue={profile.lastname}
                                        validations={[required]}
                                        // defaultValue={currentvalue && currentvalue.lastname}
                                        // onChange={(e) => {setCurrentvalue(e.target.value)}}
                                    />
                                </div>
                                <div className="input_group">
                                    <p className="profile_title mb-2">Email Address</p>
                                    <input 
                                        type="text" 
                                        className="profile_input form-control" 
                                        placeholder="Enter Email Address"
                                        name="email"
                                        onChange={profileUpdate}
                                        defaultValue={profile.email}
                                        validations={[required]}
                                        // defaultValue={currentvalue && currentvalue.email}
                                        // onChange={(e) => {setCurrentvalue(e.target.value)}} 
                                    />
                                </div>
                                <div className="input_group">
                                    <p className="profile_title mb-2">Phone Number</p>
                                    <input 
                                        type="text" 
                                        className="profile_input form-control" 
                                        placeholder="Enter Phone Number" 
                                        name="phone"
                                        onChange={profileUpdate}
                                        defaultValue={profile.phone}
                                        validations={[required]}
                                        // defaultValue={currentvalue && currentvalue.phone}
                                        // onChange={(e) => {setCurrentvalue(e.target.value)}}
                                    />
                                </div>
                                <div className="input_group">
                                    <p className="profile_title mb-2">State</p>
                                    <input 
                                        type="text" 
                                        className="profile_input form-control" 
                                        placeholder="Please Enter" 
                                        name="state"
                                        onChange={profileUpdate}
                                        // defaultValue={currentvalue && currentvalue.state}
                                        // onChange={(e) => {setCurrentvalue(e.target.value)}}
                                    />
                                </div>
                                <div className="input_group">
                                    <p className="profile_title mb-2">Address</p>
                                    <input 
                                        type="text" 
                                        className="profile_input form-control" 
                                        placeholder="Please Enter" 
                                        name="address"
                                        onChange={profileUpdate}
                                        // defaultValue={currentvalue && currentvalue.address}
                                        // onChange={(e) => {setCurrentvalue(e.target.value)}}
                                    />
                                </div>
                                <div className="input_group">
                                    <p className="profile_title mb-2">Gender</p>
                                    <input 
                                        type="text" 
                                        className="profile_input form-control" 
                                        placeholder="Please Enter" 
                                        name="Gender"
                                        onChange={profileUpdate}
                                        // defaultValue={currentvalue && currentvalue.gender}
                                        // onChange={(e) => {setCurrentvalue(e.target.value)}}
                                    />
                                </div>
                                <div className="input_group pt-3">
                                        <div className="input_group pt-3">
                                        <button className="block register_submit">
                                            {loading && (<span className="spinner-border spinner-border-sm mr-2" disabled={message}></span>)} 
                                            <span>Save Changes</span>
                                        </button>
                                    </div>
                                </div>
                                {/* <Link className="block register_submit mt-5" to="#">Save Changes</Link> */}
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

export default Profile;