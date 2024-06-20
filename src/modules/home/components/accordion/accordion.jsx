import React from 'react';
import './accordion.css'

export default function accordion() {
    return (
        <div>
           <div>
                <section className="faq">
                    <div className="container">
                        <div className="row mt-5 mb-3">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <p className="faq_header">Frequently Asked Questions</p>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="card faq_card">
                                    <div className="accordion accordion_landing accordion-flush pt-3 pb-3 pl-0 pr-0" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-headers" id="flush-headingOne">
                                                <button className="accordion-button accordion_button_landing collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <span className="accordion_header pl-4">How to get started</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="faq_accordion-body"><p className="accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        <hr className="faq_hr"></hr>
                                        <div className="accordion-item">
                                            <h2 className="accordion-headers" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <span className="accordion_header pl-4">How Reliable is Rex Logistics</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body"><p className="accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        <hr className="faq_hr"></hr>
                                        <div className="accordion-item">
                                            <h2 className="accordion-headers" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <span className="accordion_header pl-4">Do I need to always login</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body"><p className="accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        <hr className="faq_hr"></hr>
                                        <div className="accordion-item">
                                            <h2 className="accordion-headers" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <span className="accordion_header pl-4">How to recieve my money</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body"><p className="accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </section>
            </div> 
        </div>
    )
}
