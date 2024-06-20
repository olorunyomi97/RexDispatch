import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo/logo.png';
import cases from '../../../img/images/case.png';
import parcel from '../../../img/images/parcel.png';
import './gettingstarted.css'

const Gettingstarted = () => {

    // const [loading, setLoading] = useState(false);
    const updateUserCategory = (user_category) => {
        localStorage.setItem("user_role", JSON.stringify({user_category}));
        window.location.href = '/signin'
    }

    return (
        <div className="signin">
                <section>
                    <div className="row">
                        <div className="get_started_column col-md-6">
                            <Link className="container get_nav pl-5" to="/"> <img src={logo} alt="logo"/>REX DISPATCH</Link>
                            <div className="container pl-5 phone_hide">
                                <p className="get_started_text mb-0">Welcome to Rex Dispatch</p>
                                <p className="get_started_text_2 mt-0">Your highly dependable delivery service</p>
                            </div>
                            <div className="container phone_hide">
                                <ul className="started_list">
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Choose Best Rates</p>
                                    </li>
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Send Parcels Easily</p>
                                    </li>
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Reliable Riders</p>
                                    </li>
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Start your Own Business</p>
                                    </li>
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Make Easy Money</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="container hide">
                                <p className="register_footer">© Rex Logistics 2021, All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                            </div>
                            <div className="getting_started_section">
                                <div className="row pb-4 pt-4 pr-5 pl-5 get_started_parcels">
                                    <div onClick={() => updateUserCategory('customer')} type="button" className="block getting_started_btn mt-5" style={{background:'#E9F4FF'}}> 
                                        <div className="row">
                                            <div className="col-5 started_img">
                                                <img src={parcel} alt="logo"/>
                                            </div>
                                            <div className="col-7 started_btn">
                                                <p className="getting_started_title mb-1">Send parcels</p>
                                                <p className="getting_started_text">For customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pl-5 pr-5">
                                    <div onClick={() => updateUserCategory('business')} type="button" to="/register-business" className="block getting_started_btn" style={{background:'#FFE9DD'}}> 
                                        <div className="row">
                                            <div className="col-5 started_img">
                                                <img src={cases} alt="logo"/>
                                            </div>
                                            <div className="col-7 started_btn">
                                                <p className="getting_started_title mb-1">Register your ride</p>
                                                <p className="getting_started_text">For businesses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="get_started_subtext mt-4 mb-1">Already Have An Account? <Link className="link" to="signin">Login</Link></p>
                                <i className="fas fa-home mr-2"style={{color:'#0BE05C'}}></i><Link className="link" to="/home">Back Home</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
    )
}

export default Gettingstarted;
