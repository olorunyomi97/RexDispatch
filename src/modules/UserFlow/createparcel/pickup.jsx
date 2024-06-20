import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import "react-phone-input-2/lib/style.css";
import Autocomplete from 'react-google-autocomplete';
import "./sendparcel.css";


const PickupParcel = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [loading, setLoading] = useState(false);
  const [new_data, setNew_data] = useState({});


  const GOOGLE_API_URL = process.env.REACT_APP_GOOGLEAPIKEY;
  console.log (GOOGLE_API_URL)

  const handleChange = (e) => {
    new_data[e.target.name] = e.target.value;
    setNew_data({
      ...new_data,
    });
  };

  const handleParcel = (e) => {
    console.log(new_data);
    e.preventDefault();
    setLoading(true);
    form.current.validateAll();

    props.set_pickup_data(new_data);
    props.toggle_pickup_show(false);
  };

  return (
    <div>
      <Form ref={form} onSubmit={handleParcel}>
        <div className="register_form">
        <div className="input_group">
              <p className="input_title mb-2">Select Package Type</p>
              <select 
                className="custom-select"
                name="package_type"
                onChange={handleChange}
                required={true}
              >
                <option className="selector"defaultValue>Select Package type</option>
                <option defaultValue="Envelope">Envelope</option>
                <option defaultValue="Parcel">Parcel</option>
                <option defaultValue="Box">Box</option>
                <option defaultValue="Food">Food</option>
              </select>
          </div>
          <div>
            <p className="input_title mb-2">Pick Up Address </p>
            <Autocomplete
                className="register_input form-control"
                apiKey={GOOGLE_API_URL}
                name="pickup_address"
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
          {/* <p className="input_title mb-2">Pick Up Address </p>
              <GooglePlacesAutocomplete
                    apiKey={GOOGLE_API_URL}
                    name="pickup_address"
                    onChange={handleChange}
                    apiOptions={{ language: 'en', region: 'ng'}}
                    autocompletionRequest={{
                      componentRestrictions: {
                          country: ['ng'],
                      },
                      
                    }}
                    className="input_group"
                    styles={{ 
                        outlineColor: "#BBBED7",
                        backgroundColor: "black"
                        }}
                    selectProps={{
                        placeholder: "Enter Address"
                    }}
                    
                >
          </GooglePlacesAutocomplete> */}
          <div className="input_group mt-4">
            <p className="input_title mb-2">Notable Landmark</p>
            <input
              type="text"
              className="register_input form-control"
              placeholder="Enter Notable Landmark"
              name="notable_landmark"
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="input_group">
            <p className="input_title mb-2">Sender's Name</p>
            <input
              type="text"
              className="register_input form-control"
              placeholder="Name of person sending package"
              name="senders_name"
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="input_group">
            <p className="input_title mb-2">Senders Phone Number</p>
            <input
              className="register_input form-control" 
              country={'ng'}
              name="senders_phone"
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="input_group pt-3">
            <button className="block register_submit" type="submit">
              {loading && (
                <span className="spinner-border spinner-border-sm mr-2"></span>
              )}
              <span>Continue to delivery details</span>
            </button>
          </div>
        </div>
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default PickupParcel;
