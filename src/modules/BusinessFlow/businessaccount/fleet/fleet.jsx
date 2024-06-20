import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PagesNav from '../../../pagesnav/pagesnav';
import AccountTab from '../../../partials/accounttab';
import Footer from '../../../footer/footer';
import FleetModal from './fleetmodal';
import FleetSuccess from './fleetsuccessmodal';
import UpdateFleet from './updatefleetmodal';
import DeleteFleet from './deletefleetmodal';
import './fleet.css'

const Fleet = (props, data) => {
    const [loading, setLoading] = useState(false);
    const [showFleetModal, setShowFleetModal] = useState(false);
    const [showFleetSuccess, setShowFleetSuccess] = useState(false);
    const [fleets, setFleet] = useState(null);

    const modalClose = () => {
        setShowFleetModal(false);
        setShowFleetSuccess(false);
    }
    const modalShow = () => {
        setShowFleetModal(true);
    }
    const shownextModal = () => {
        setShowFleetModal(false);
        setShowFleetSuccess(true);
    }
    // Update A Vehicle Modal //
    const [UpdateModal, setUpdateModal] = useState(false);
    const closeUpdateModal = () => {
        setUpdateModal(false);
    }
    const showUpdateModal = () => {
        setUpdateModal(true);
    }

    // Delete A Vheicle Modal //
    const [DeleteModal, setDeleteModal] = useState(false);
    const closeDeleteModal = () => {
        setDeleteModal(false);
    }
    const showDeleteModal = () => {
        setDeleteModal(true);
    }

    const API_URL = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios.get(API_URL + '/business/dispatcher/get_dispatcher', data)
        .then(data => {
            console.log(data.data.data);
            setFleet(data.data.data)
        });
    },[data, API_URL]);

    // function deleteFleet(_id){
    //     axios.delete(API_URL + `/business/dispatcher/delete_dispatcher/${_id}`)
    //     .then(data => {
    //         window.location.reload();
    //     console.log(data)
    //     });
        
    // }
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
                            {/* wallet section */}
                            <div className="mt-5">
                                {/* <div className="container"> */}
                                <div className="row">
                                    <div className="col-8"></div>
                                    <div className="col-4 pr-5">
                                        <Link className="business_account_btn" to="#" onClick={modalShow}>Add Vehicle</Link>
                                        <FleetModal showFleetModal={showFleetModal} modalClose={modalClose} shownextModal={shownextModal}/>
                                        <FleetSuccess showFleetModal={showFleetSuccess} modalClose={modalClose} />
                                    </div>
                                {/* </div> */}
                                </div>
                                <div className="container pt-5">
                                    <div className="row pl-5 pr-5">
                                        <div className="container wallet_table">
                                            <div>
                                            {(fleets != null && fleets.length <=0) ?
                                                <div style={{justifyContent:'center'}}> 
                                                    <h5 className="pt-3">No fleets yet. Please Add Vehicle(s)</h5>
                                                </div>
                                                : 
                                                <>
                                                    <Table hover>
                                                        <thead>
                                                            <tr className="table_title">
                                                                <th className="table_item p-3" style={{borderRadius:"20px 0px 0px 0px"}}>Plate Number</th>
                                                                {/* <th className="table_item p-3">ID</th> */}
                                                                <th className="table_item p-3">Vehicle Type</th>
                                                                <th className="table_item p-3">Rider's Name</th>
                                                                <th className="table_item p-3">Riders Phone Number</th>
                                                                <th className="table_item p-3 acc_update">update</th>
                                                                <th className="table_item p-3 acc_update" style={{borderRadius:"0px 20px 0px 0px"}}>delete</th>
                                                            </tr>
                                                        </thead>
                                                    
                                                    
                                                        <tbody className="table_body">
                                                            {fleets && fleets.map((fleet,rider) => {
                                                                return (
                                                                <tr key={rider} data={fleet}>
                                                                    <td className="table_item2 p-3">{fleet.license_number}</td>
                                                                    {/* <td className="table_item2 p-3">{fleet._id}</td> */}
                                                                    <td className="table_item2 p-3">{fleet.vehicle_type}</td>
                                                                    <td className="table_item2 p-3">{fleet.firstname} {fleet.lastname}</td>
                                                                    <td className="table_item2 p-3">{fleet.phone}</td>
                                                                    <td className="table_item2 p-3 credit">
                                                                        <Link to="#" className="credit" 
                                                                            onClick={showUpdateModal}>Update
                                                                        </Link>
                                                                        <UpdateFleet fleet_id={fleet._id} UpdateModal={UpdateModal} closeUpdateModal={closeUpdateModal} />
                                                                    </td>
                                                                    <td className="table_item2 p-3 debit">
                                                                        <Link to="#" className="debit" 
                                                                            onClick={showDeleteModal}>Delete
                                                                        </Link>
                                                                        <DeleteFleet fleet_id={fleet._id} DeleteModal={DeleteModal} closeDeleteModal={closeDeleteModal} />
                                                                    </td>
                                                                </tr>
                                                                )
                                                            })}
                                                        
                                                        </tbody>
                                                    </Table>
                                                </>
                                            }
                                            </div>
                                        </div>
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
    )
}

export default Fleet;