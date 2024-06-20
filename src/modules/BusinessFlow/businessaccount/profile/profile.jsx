import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import avatar from '../../../../img/images/avi.png'
import Footer from '../../../footer/footer';
import ProfileModal from './profilemodal';
import ProfileSuccessModal from './profilesuccess';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { updateprofile } from '../../../../redux/business/account/profile/profileAction'
import './profile.css'

const Profile = ((props, data) => {
    const checkBtn = useRef();
    const form = useRef();
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const [profile, setProfile] = useState("");
    const [disable, setDisable] = useState(false);
    const [profileModal, setProfileModal] = useState(false);
    const [profileSuccessModal, setProfileSuccessModal] = useState(false);

    const [new_data, setNew_data] = useState({})
    const profileUpdate = (e) => {
        new_data[e.target.name] = e.target.value
        setNew_data({
            ...new_data
        })
    };

    const handleProfileUpdate = (e) => {
        console.log(new_data)
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            // console.log(fleet_id)
            dispatch(updateprofile ( new_data )
                ).then(() => {
                props.history.push("/business-profile");
                window.location.reload();
              })
              .catch(() => {
                setLoading(false);
              });
          } else {
            setLoading(false);
        }
    };

    const modalClose = () => {
        setProfileModal(false);
        setProfileSuccessModal(false);
    }
    const modalShow = () => {
        setProfileModal(true);
    }
    const shownextModal = () => {
        setProfileModal(false); 
        setProfileSuccessModal(true);
    }

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + '/business/business_profile' ,data)
        .then(data => {
            console.log(data.data.data)
            setProfile(data.data.data)
        });
    },[data, API_URL]);

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
                            {/* Profile */}
                            <div className="row business_profile">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div className="mt-5 mb-5">
                                        <img src={avatar} alt="avatar"/>
                                        <Link className="link" to="#" disabled={disable} onClick={() => setDisable(true)}>
                                            <p className="modal_minitext mb-0" style={{ color: "#FD3538" }} onClick={modalShow}>Verify your profile</p>
                                        </Link>
                                        <ProfileModal profileModal={profileModal} modalClose={modalClose} shownextModal={shownextModal}/>
                                        <ProfileSuccessModal profileModal={profileSuccessModal} modalClose={modalClose} />
                                    </div>
                                    {message && (
                                        <div className="form-group">
                                            <div className={ successful ? "alert alert-success" : "alert alert-success" } role="alert" style={{textTransform:'capitalize'}}>
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <Form onSubmit={handleProfileUpdate} ref={form}>
                                    <div className="register_form pr-5 pl-5">
                                        <div className="input_group">
                                            <p className="input_title mb-2">Business Name</p>
                                            <input 
                                                type="text" 
                                                className="register_input form-control" 
                                                placeholder="Business name here" 
                                                name="business_name"
                                                onChange={profileUpdate}
                                                defaultValue={profile.business_name}
                                            
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Email Address</p>
                                            <input 
                                                type="text" 
                                                className="register_input form-control" 
                                                placeholder="Please enter"
                                                name="email"
                                                onChange={profileUpdate}
                                                defaultValue={profile.email}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Location</p>
                                            <input 
                                                type="text" 
                                                className="register_input form-control" 
                                                placeholder="Please enter"
                                                name="location"
                                                onChange={profileUpdate}
                                                defaultValue={profile.location}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Phone Number </p>
                                            <input 
                                                type="text" 
                                                className="register_input form-control" 
                                                placeholder="+2347051014243" 
                                                name="phone"
                                                onChange={profileUpdate}
                                                defaultValue={profile.phone}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Address</p>
                                            <input 
                                                type="text" 
                                                className="register_input form-control" 
                                                placeholder="Please enter" 
                                                name="address"
                                                onChange={profileUpdate}
                                                defaultValue={profile.address}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Name of Contact Person</p>
                                            <input 
                                                type="text" 
                                                className="register_input form-control" 
                                                placeholder="Please enter" 
                                                
                                            />
                                        </div>
                                        {/* <div className="input_group">
                                            <p className="input_title mb-2">Attach License</p>
                                            <input 
                                                type="text" 
                                                className="register_input form-control" 
                                                placeholder="Please Attach" 
                                            />
                                        </div> */}
                                        {/* <div className="input_group mt-5">
                                            <Link className="block register_submit" to="#">Save Changes</Link>
                                        </div> */}
                                        <button className="block register_submit">
                                            {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                            <span>Save Changes</span>
                                        </button>
                                    </div>
                                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                    </Form>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </div>
    )


});
export default Profile;