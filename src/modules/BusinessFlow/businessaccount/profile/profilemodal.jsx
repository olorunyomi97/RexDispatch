import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import { submitlicense } from "../../../../redux/business/account/license/licenseAction";
import CheckButton from "react-validation/build/button";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import ProfileSuccess from "./profilesuccess";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

const Profilemodal = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [type, setType] = useState("");
    const [document_number, setNumber] = useState("");
    const [date_issued, setIssueDate] = useState(false);
    const [expiry_date, setExpiryDate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    // const [new_data, setNew_data] = useState({})
    const [startDate, setStartDate] = useState(new Date());

    const history = useHistory();
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);

    const onChangeType = (e) => {
        const type = e.target.value;
        setType(type)
    };
    const onChangeNumber = (e) => {
        const document_number = e.target.value;
        setNumber(document_number)
    };
    const onChangeIssueDate = (e) => {
        const date_issued = e.target.value;
        setIssueDate(date_issued)
    };
    const onChangeExpiryDate = (e) => {
        const expiry_date = e.target.value;
        setExpiryDate(expiry_date)
    };

    // let data = {}

    // const licenseChange = (e) => {
    //     new_data[e.target.name] = e.target.value
    //     console.log(data)
    //     setNew_data({
    //         ...new_data
    //     })
    // };


    // const handleLicense = (e) => {
    //     console.log(new_data)
    //     e.preventDefault();
    //     setLoading(true);
    //     form.current.validateAll();
    //     if (checkBtn.current.context._errors.length === 0) {
    //         dispatch(submitlicense
    //             (new_data)
    //             ).then(() => {
    //             props.history.push("/business_account");
    //             // window.location.reload();
    //           })
    //           .catch(() => {
    //             setLoading(false);
    //           });
    //       } else {
    //         setLoading(false);
    //     }
    // };

    const handleLicense = (e) => {
            // console.log(new_data)
            e.preventDefault();
            setLoading(true);
            form.current.validateAll();
            if (checkBtn.current.context._errors.length === 0) {
                dispatch(submitlicense(type,document_number,date_issued,expiry_date))
                .then(() => {
                    history.push("/business-profile");
                    window.location.reload();
                  })
                  .catch(() => {
                    setLoading(false);
                  });
              } else {
                setLoading(false);
            }
        };

    return (
        <div>
            <Modal show={props.profileModal} onHide={props.modalClose}>
            {message && (
                <div className="form-group">
                    <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert" style={{textTransform:'capitalize', margin:'30px'}}>
                        {message}
                    </div>
                </div>
            )}
            <Form onSubmit={handleLicense} ref={form}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 profile_modal">
                        <p className="profile_id mt-5">Please attach government issued ID</p>
                        <div className="input_group">
                        <p className="profile_title mb-2">Document Type</p>
                            <select 
                                className="custom-select"
                                name="type"
                                value={type}
                                onChange={onChangeType}
                                // onChange={licenseChange}
                            >
                                <option className="selector"defaultValue>Select Document type</option>
                                <option defaultValue="Driver's License" >Driver's License</option>
                                <option defaultValue="PVC Card">PVC Card</option>
                                <option defaultValue="National ID Card">National ID Card</option>
                            </select>
                        </div>
                        
                        <div className="input_group">
                            <p className="profile_title mb-2">Document Number</p>
                            <input 
                                type="text" 
                                className="register_input form-control" 
                                placeholder="Enter Document Number" 
                                name="document_number"
                                value={document_number}
                                onChange={onChangeNumber}
                            />
                        </div>
                        <div className="input_group">
                            <p className="profile_title mb-2">Date Issued</p>
                            <input 
                                type="date" 
                                className="register_input form-control" 
                                placeholder="Date Issued" 
                                name="date_issued"
                                value={date_issued}
                                onChange={onChangeIssueDate}
                            />  
                        </div> 
                        <div className="input_group">
                            <p className="profile_title mb-2">Expiry Date</p>
                            <input 
                                type="date" 
                                className="register_input form-control" 
                                placeholder="Expiry Date" 
                                name="expiry_date"
                                value={expiry_date}
                                onChange={onChangeExpiryDate}
                            />
                        </div>
                        {/* <div className="input_group">
                            <p className="profile_title mb-2">Date Issued</p>
                            <DatePicker  
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)}
                                className="register_input form-control" 
                                placeholder="Date Issued" 
                                name="date_issued"
                                value={date_issued}
                                onChange={setIssueDate}
                            />  
                        </div>
                        <div className="input_group">
                            <p className="profile_title mb-2">Expiry Date</p>
                            <DatePicker 
                                // value={licenseChange}
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)}
                                className="register_input form-control" 
                                placeholder="Expiry Date" 
                                name="expiry_date"
                                value={expiry_date}
                                onChange={setExpiryDate}
                            />
                        </div> */}
                        <div className="mt-4">
                        <button className="block register_submit">
                            {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                            <span>Submit</span>
                        </button>
                        {/* <Link className="block register_submit"to="#" onClick={props.shownextModal}>Submit</Link> */}
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </Modal>
        </div>
    )
}
export default Profilemodal;