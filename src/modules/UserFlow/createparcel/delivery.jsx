import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { createparcel } from "../../../redux/user/parcel/parcelAction";
import { useDispatch } from "react-redux";
import "react-phone-input-2/lib/style.css";
import Autocomplete from 'react-google-autocomplete';
import "./delivery.css";
// import PhoneInput from 'react-phone-input-2';
// import { Link } from 'react-router-dom';
// import logo from '../../../img/logo/logo.png';


const Delivery = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [delivery_data, setNew_data] = useState({});

  const dispatch = useDispatch();

  const GOOGLE_API_URL = process.env.REACT_APP_GOOGLEAPIKEY;
  

  const handleChange = (e) => {
    delivery_data[e.target.name] = e.target.value;

    setNew_data({
      ...delivery_data,
    });
  };

  const delivery_handleParcel = async (e) => {
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();

    let new_data = Object.assign(props.pickup_data, delivery_data);
    console.log(new_data);
    dispatch(createparcel(new_data))
      .then(() => history.push("/parcel-created"))
      .catch((e) => setLoading(false));
    };

  return (
    <>
      <Form ref={form} onSubmit={delivery_handleParcel}>
        <div className="register_form">
          <div className="input_group">
            <p className="input_title mb-2">Delivery Address</p>
            <Autocomplete
                className="register_input form-control"
                apiKey={GOOGLE_API_URL}
                name="delivery_address"
                onChange={handleChange}
                required={true}
                onPlaceSelected={(place) => {
                  console.log(place);
                }}
                options={{
                  componentRestrictions: { country: "ng" },
                  fields: ["address_components", "geometry", "icon", "name"],
                  strictBounds: false,
                  types: ["establishment"],
                }}
            />
          </div>
          <div className="input_group">
            <p className="input_title mb-2">Nearest Landmark</p>
            <input
              type="text"
              className="register_input form-control"
              placeholder="Enter Nearest Landmark"
              name="nearest_landmark"
              onChange={handleChange}
            />
          </div>
          <div className="input_group">
            <p className="input_title mb-2">Recipient's Name</p>
            <input
              type="text"
              className="register_input form-control"
              placeholder="Name of recieveing party"
              name="recipient_name"
              onChange={handleChange}
            />
          </div>
          <div className="input_group">
            <p className="input_title mb-2">Phone Number</p>
            <input
              className="register_input form-control" 
              country={'ng'}
              name="recipient_phone"
              onChange={handleChange}
            />
          </div>

          <div className="input_group">
            <p className="input_title mb-2">Additional Information</p>
            <textarea
              type="text"
              className="register_input form-control"
              placeholder="Optional message for courier or recipient"
              rows="3"
              name="additional_information"
              onChange={handleChange}
            />
          </div>

          <div className="input_group pt-3">
            <button className="block register_submit">
              {loading && (
                <span className="spinner-border spinner-border-sm mr-2"></span>
              )}
              <span>Submit</span>
            </button>
            <div className="link">
              <p className="link mt-3" style={{ textAlign:'center'}}>Back</p>
            </div>
          </div>
        </div>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </>
  );
};

export default Delivery;
