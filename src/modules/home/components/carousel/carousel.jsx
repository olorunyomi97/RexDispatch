import React from 'react';
import queen from '../../../../img/images/queen.png';
import king from '../../../../img/images/king.png';
import quote from '../../../../img/images/quote.png'
import './carousel.css'


export default function carousel() {
    return (
        <div>
           <div className="logistics">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-5">
                                <p className="logistics_header mb-5">Experiences from Rex Logistic users</p>
                            </div>
                            <div className="col-md-6"></div>
                        </div>

                        {/* <!--Carousel Wrapper--> */}
                        <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                            {/* <!--Controls--> */}
                            <div className="controls-top">
                                <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="far fa-arrow-alt-circle-left fa-3x" style={{ color: '#0BE05C'}}></i></a>&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;<a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="far fa-arrow-alt-circle-right fa-3x" style={{ color: '#0BE05C'}}></i></a>
                            </div>
                            {/* <!--/.Controls--> */}

                            {/* <!--Slides--> */}
                            <div className="carousel-inner" role="listbox">
                                {/* <!--First slide--> */}
                                <div className="carousel-item active">
                                    <div className="carousel_bg">
                                    <div className="card-group">
                                    <div className="card hide">
                                        <div className="card card_bg">
                                            <div className="card_quote">
                                                <img src={quote} alt="quote" width="30px" height="20px"/>
                                            </div>
                                            <p className="card_text pt-4 pl-5 pr-5 pb-2">“You made it so simple. My new site is so much easier to work with than my old site. I just choose the page, make the change.”</p>
                                            <div className="row card_details">
                                                <div className="card_img col-4">
                                                    <img src={queen} alt="logo" width="50px" height="50px"/>
                                                </div>
                                                <div className="col-8 col-sm-6 col-xs-6">
                                                    <p className="card_owner mb-0"> Cameron Anderson</p>
                                                    <p className="card_ownername mt-0">From CrazyEggs.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card card_bg">
                                            <div className="card_quote">
                                                <img src={quote} alt="quote" width="30px" height="20px"/>
                                            </div>
                                            <p className="card_text pt-4 pl-5 pr-5 pb-2">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                            <div className="row card_details">
                                                <div className="card_img col-4">
                                                    <img src={king} alt="logo" width="50px" height="50px"/>
                                                </div>
                                                <div className="col-8 col-sm-6 col-xs-6">
                                                    <p className="card_owner mb-0"> Cameron Anderson</p>
                                                    <p className="card_ownername mt-0">From CrazyEggs.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card hide">
                                        <div className="card card_bg">
                                            <div className="card_quote">
                                                <img src={quote} alt="quote" width="30px" height="20px"/>
                                            </div>
                                            <p className="card_text pt-4 pl-5 pr-5 pb-2">“This is a top quality product. No need to think twice before purchasing, you simply could not go wrong”</p>
                                            <div className="row card_details">
                                                <div className="card_img col-4">
                                                    <img src={queen} alt="logo" width="50px" height="50px"/>
                                                </div>
                                                <div className="col-8 col-sm-6 col-xs-6">
                                                    <p className="card_owner mb-0"> Cameron Anderson</p>
                                                    <p className="card_ownername mt-0">From CrazyEggs.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                {/* <!--/.First slide--> */}

                                {/* <!--Second slide--> */}
                                <div className="carousel-item">
                                <div className="carousel_bg">
                                    <div className="card-group">
                                    <div className="card hide">
                                        <div className="card card_bg">
                                            <div className="card_quote">
                                                <img src={quote} alt="quote" width="30px" height="30px"/>
                                            </div>
                                            <p className="card_text pt-4 pl-5 pr-5 pb-2">“You made it so simple. My new site is so much easier to work with than my old site. I just choose the page, make the change.”</p>
                                            <div className="row card_details">
                                                <div className="card_img col-4">
                                                    <img src={king} alt="logo" width="50px" height="50px"/>
                                                </div>
                                                <div className="col-8 col-sm-6 col-xs-6">
                                                    <p className="card_owner mb-0"> Cameron Anderson</p>
                                                    <p className="card_ownername mt-0">From CrazyEggs.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card card_bg">
                                            <div className="card_quote">
                                                <img src={quote} alt="quote" width="30px" height="30px"/>
                                            </div>
                                            <p className="card_text pt-4 pl-5 pr-5 pb-2">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                            <div className="row card_details">
                                                <div className="card_img col-4">
                                                    <img src={queen} alt="logo" width="50px" height="50px"/>
                                                </div>
                                                <div className="col-8 col-sm-6 col-xs-6">
                                                    <p className="card_owner mb-0"> Cameron Anderson</p>
                                                    <p className="card_ownername mt-0">From CrazyEggs.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card hide">
                                        <div className="card card_bg">
                                            <div className="card_quote">
                                                <img src={quote} alt="quote" width="30px" height="30px"/>
                                            </div>
                                            <p className="card_text pt-4 pl-5 pr-5 pb-2">“This is a top quality product. No need to think twice before purchasing, you simply could not go wrong”</p>
                                            <div className="row card_details">
                                                <div className="card_img col-4">
                                                    <img src={queen} alt="logo" width="50px" height="50px"/>
                                                </div>
                                                <div className="col-8 col-sm-6 col-xs-6">
                                                    <p className="card_owner mb-0"> Cameron Anderson</p>
                                                    <p className="card_ownername mt-0">From CrazyEggs.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    )
}
