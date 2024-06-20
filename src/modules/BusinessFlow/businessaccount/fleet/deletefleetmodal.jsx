import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Deletefleetmodal = (props) => {
    const {fleet_id} = props;
    const history = useHistory();
    // const [fleets, setFleet] = useState(null);

    const API_URL = process.env.REACT_APP_API_URL;

    function deleteFleet(_id){
        axios.delete(API_URL + `/business/dispatcher/delete_dispatcher/${_id}`)
        .then(data => {
            history.push("/fleet");
            window.location.reload();
        });
    }
    return (
        <div>
            <Modal show={props.DeleteModal} onHide={props.closeDeleteModal}>
            <div className="row mt-5 mb-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p className="fleet_modal_title pl-2">Confirm Delete</p>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <p className="delete_text">Are you sure you want to delete this Vehicle?</p>
                            <p className="delete_text">You cannot undo this.</p>
                            {/* <p>{fleet_id}</p> */}
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            {/* {
                fleets && fleets.map((fleet,rider) => {
                    return ( */}
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="input_group pt-3 pb-3">
                                <button className="block delete_btn" to="#" 
                                    onClick={() => {deleteFleet(fleet_id)}}>Yes Please, Delete
                                </button>
                                <Link className="link" to="#">
                                    <p className="modal_minitext" style={{ color: "black" }}
                                    onClick={props.closeDeleteModal}>Back
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    {/* )
                })
            } */}
            </Modal>
        </div>
    )
}

export default Deletefleetmodal;