import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import thumb from '../../../img/images/thumb.png';
import SideNav from '../../partials/sidenav'
import TopNav from '../../partials/topnav';

const Parcelcreated = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const allOffers = (e) => {
        history.push("/all-offers");
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
                    <div className="col-md-8 pt-5">
                        {/* <TopNav /> */}
                        <div className="row mt-5">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <img src={thumb} alt="logo" />
                                <div className="mt-3 mb-5 pl-2 pr-2">
                                    <p className="bid_text">Your parcel has created successfully.</p>
                                    <div className="row mb-5">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-10">
                                            <p className="bid_subtext">Click the button below to select the business that made the bid to handle your package.</p>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                    <div className="mb-3">
                                        <button className="block register_submit" onClick={allOffers}>
                                            {loading && (
                                                <span className="spinner-border spinner-border-sm mr-2"></span>
                                            )}
                                            <span>All Offers</span>
                                        </button>
                                    </div>
                                    {/* <Link className="bid_buttton"to="/create-parcel">All Offers</Link> */}
                                </div>
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

export default Parcelcreated;