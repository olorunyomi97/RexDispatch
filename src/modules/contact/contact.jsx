import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Download from '../home/components/download/download';
import PagesNav from '../pagesnav/pagesnav';
import './contact.css'

export default function contact() {
    return (
        <div>
             <div>
               <div className="contact_jumbotron contacr_flex">
                    <PagesNav />
                    <div className="container">
                        <div className="row faq_row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <p className="faq_title">Contact</p>
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
                {/* contact section */}
                <section className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 pb-5 pt-5">
                                <div className="card contact_card mb-5">
                                    <div className="row">
                                        <div className="col-3 contact_phone">
                                            <div className="contact_icon">
                                                <i className="box_icon fas fa-phone" style={{color: 'white'}}></i>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <p className="contact_card_details pt-4">Call Us Today</p>
                                            <p className="contact_card_phone pb-2">+1-301-340-3946</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="card contact_card">
                                    <div className="row">
                                        <div className="col-3">
                                        <div className="contact_icon">
                                                <i className="box_icon fas fa-envelope" style={{color: 'white'}}></i>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <p className="contact_card_details pt-4">Send Us An Email</p>
                                            <p className="contact_card_phone pb-2">info@rexlogistics.com</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <div className="card contact_card_flex">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="register_form">
                                                
                                                <p className="contact_input mb-2">Send Us A message</p>
                                               
                                                <div className="input_group">
                                                    <p className="contact_input_title mb-4">Your Full Name</p>
                                                    <input type="text" className="register_input form-control" placeholder="Surname first" />
                                                </div>
                                                <div className="input_group">
                                                    <p className="contact_input_title mb-4">Email Address</p>
                                                    <input type="text" className="register_input form-control" placeholder="Enter email" />
                                                </div>
                                                <div className="input_group">
                                                    <p className="contact_input_title mb-4">Your Message</p>
                                                    <textarea type="text" className="register_input form-control" placeholder="Enter Message" rows="4"/>
                                                </div>
                                                <div className="input_group pt-3 pb-5">
                                                    <Link className="block register_submit" to="#">Send Message</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>  
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </section>
                <Download />
               <Footer />
            </div> 
        </div>
    )
}
