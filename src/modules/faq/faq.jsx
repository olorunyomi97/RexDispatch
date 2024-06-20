import React from 'react';
import Footer from '../footer/footer';
import Download from '../home/components/download/download';
import PagesNav from '../pagesnav/pagesnav';
import './faq.css'

export default function faq() {
    return (
        <div>
           <div>
                <div className="faq_jumbotron">
                    <PagesNav />
                    <div className="container">
                        <div className="row faq_row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <p className="faq_title">FAQs</p>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-10">
                                        <p className="faq_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                {/* Faq body section */}
                <section className="faq_body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="faq_body_text">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Nulla Lorem mollit cupidatat irure. </p>
                            </div>
                            <div className="col-md-1"></div>
                                <div className="col-md-7 mb-5">
                                    <div className="faq_accordion accordion-flush pb-3 pl-0 pr-0" id="accordionFlushExample">
                                        <div className="accordion_item mb-3">
                                            <h2 className="accordion-headerss" id="flush-headingOne">
                                                <button className="accordion-button faq_accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    <span className="faq_accordion_header pl-4">How to get started</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="faq_accordion_body pl-4"><p className="faq_accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        
                                        <div className="accordion_item mb-3">
                                            <h2 className="accordion-headerss" id="flush-headingTwo">
                                                <button className="accordion-button faq_accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <span className="faq_accordion_header pl-4">How Reliable is Rex Dispatch</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="faq_accordion_body pl-4"><p className="faq_accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        
                                        <div className="accordion_item mb-3">
                                            <h2 className="accordion-headers" id="flush-headingThree">
                                                <button className="accordion-button faq_accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <span className="faq_accordion_header pl-4">Do I need to always login?</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="faq_accordion_body pl-4"><p className="faq_accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        
                                        <div className="accordion_item mb-3">
                                            <h2 className="accordion-headers" id="flush-headingFour">
                                                <button className="accordion-button faq_accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <span className="faq_accordion_header pl-4">How to I recieve my money?</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="faq_accordion_body pl-4"><p className="faq_accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        <div className="accordion_item mb-3">
                                            <h2 className="accordion-headers" id="flush-headingFive">
                                                <button className="accordion-button faq_accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <span className="faq_accordion_header pl-4">How reliable is Rex Dispatch?</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="faq_accordion_body pl-4"><p className="faq_accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                        <div className="accordion_item mb-5">
                                            <h2 className="accordion-headers" id="flush-headingSix">
                                                <button className="accordion-button faq_accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                <span className="faq_accordion_header pl-4">Do I need to always login?</span>
                                                </button>
                                            </h2>
                                            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="faq_accordion_body pl-4"><p className="faq_accordion_text pl-4 col-md-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <Download />
                <Footer />
            </div> 
        </div>
    )
}
