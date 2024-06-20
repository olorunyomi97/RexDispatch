import React from 'react';
import apple from '../../../../img/logo/apple.png';
import './download.css';

export default function download() {
    return (
        <div className="download">
            <section className="download_app container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <p className="download_header">Download the app</p>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <p className="download_text">Start sending parcels with so much ease. As a business owner you can earn alot too.</p>
                                <div className="download_logo">
                                <img className="mr-3" src={apple} alt="logo"/>
                                <img src={apple} alt="logo"/>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </section>
        </div>
    )
}
