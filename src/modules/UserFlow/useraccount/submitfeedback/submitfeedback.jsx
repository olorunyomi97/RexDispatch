import React, { useState, useEffect, useRef } from 'react';
import { useDispatch} from "react-redux";
import axios from "axios";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import ReactStars from "react-rating-stars-component";
import PagesNav from '../../../pagesnav/pagesnav';
import Footer from '../../../footer/footer';
import gig from '../../../../img/images/gig.png';
import UserTab from '../../../partials/usertab';
import {submit_feedback} from '../../../../redux/user/account/feedback/feedbackAction';
import './submitfeedback.css';

const Submitfeedback = (props) => {
    console.log(props)
    // const prop_data = props.location.state;
    // console.log(prop_data)
    const { business_id, logo, business_name } = props;

    const form = useRef();
    const checkBtn = useRef();
    const dispatch = useDispatch();
    const [new_data, setNew_data] = useState({});
    const [loading, setLoading] = useState(false);
    // const [feedback, setFeedback] = useState('');

    // const onChangeRating = (e) => {
    //     const rating = e.target.value;
    //     setRating(rating);
    // }

    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    // };

    // const API_URL = process.env.REACT_APP_API_URL;
    // useEffect(() => {
    //     axios.get(API_URL + `/customer/feedback/get_feedback/${id}`, data)
    //     .then(data => {
    //         console.log(data.data.data);
    //         setRating(data.data.data)
    //     });
    // },[data, API_URL, id]);

    const handleChange = (e) => {
        new_data[e.target.name] = e.target.value;
        setNew_data({
          ...new_data,
        });
      };
   
    const handleRating = (e) => {
        e.preventDefault();
        setLoading(true);
        // setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(submit_feedback(new_data, props.location.business_id))
            .then(() => {alert('business successfully rated')})
            .catch(() => {setLoading(false);}); 
        } 
    };

    return (
        <div>
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
                            {/* wallet section */}
                            <div className="wallet mt-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <p className="feedback_text pb-3">How was this delivery?</p>
                                            <p className="feedback_subtext pb-3">Rate this delivery if you enjoy the service. Your ratings helps others.</p>
                                            <div className="card feedback_card">
                                                <div className="row">
                                                    <div className="col-md-3 p-3">
                                                        <img className="feedback_gig" src={ props.location.logo}  width="100%" height="95%" />
                                                    </div>
                                                    <div className="col-md-9 p-3">
                                                        <p className="feedback_item mb-0">{ props.location.business_name }</p>
                                                        {/* <p className="feedback_subitem">4825 Deliveries { props.location.business_id }</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <Form onSubmit={handleRating} ref={form}>
                                                {/* <div className="row pl-3 pt-3">
                                                    <div className="col-md-2"></div>
                                                    <div className="col-md-8">
                                                        <ReactStars
                                                        classNames="pl-3"
                                                        count={5}
                                                        value={stars}
                                                        onChange={setStars}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                        />
                                                    </div>
                                                    <div className="col-md-2"></div>
                                                </div> */}
                                                 <div className="input_group mt-4">
                                                    {/* <p className="input_title mb-2">Select Package Type</p> */}
                                                    <select 
                                                        className="custom-select"
                                                        name="rating"
                                                        onChange={handleChange}
                                                        required={true}
                                                    >
                                                        <option className="selector"defaultValue>Please Rate Business</option>
                                                        <option defaultValue="1">1 Star</option>
                                                        <option defaultValue="2">2 Stars</option>
                                                        <option defaultValue="3">3 Stars</option>
                                                        <option defaultValue="4">4 Stars</option>
                                                        <option defaultValue="5">5 Stars</option>
                                                    </select>
                                                </div>
                                                <div className="input_group mt-4">
                                                    <button className="block register_submit"> 
                                                    {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                                    <span>Submit Feedback</span></button>
                                                </div>
                                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                            </Form>

                                            {/* <Link className="block track_btn mt-5" to="#">Submit Feedback</Link> */}
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </div>
        </div>

    )
}

export default Submitfeedback;