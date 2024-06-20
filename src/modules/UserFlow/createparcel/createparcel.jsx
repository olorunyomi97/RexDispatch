import React, { useState } from "react";
import Delivery from "./delivery";
import Pickup from "./pickup";
// import { Nav } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import logo from "../../../img/logo/logo.png";
import TopNav from '../../partials/topnav';
import SideNav from '../../partials/sidenav'

const Createparcel = (props) => {
  const [pickup_show, toggle_pickup_show] = useState(true);
  const [pickup_data, set_pickup_data] = useState({});

  return (
    <div>
        <div>
            <div className="delivery">
                <section>
                    <div className="row">
                        <div className="col-md-4">
                            <SideNav />
                        </div>
                        <div className="col-md-8">
                            <TopNav />

                            <div className="row">
                                <div className="col-3">
                                </div>
                                <div className="col-6 pr-0">
                                    <p className="register_body pl-2">Send A Package</p>
                                    <p className="pick_up pl-2 pb-2">{pickup_show ? "Pickup Details" : "Delivery details"}</p>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 registration">
                                    {pickup_show && <Pickup toggle_pickup_show={toggle_pickup_show} set_pickup_data={set_pickup_data} />}
                                    {!pickup_show && <Delivery pickup_data={pickup_data} />}
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
);

};

export default Createparcel;
