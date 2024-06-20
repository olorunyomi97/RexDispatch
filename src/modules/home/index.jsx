import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "../navbar/navbar";
import Accordion from "./components/accordion/accordion";
import Landing from "./components/landing/landing";
import Carousel from "./components/carousel/carousel";
import Download from "./components/download/download";
import Footer from '../footer/footer';

class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing />
                <Accordion />
                <Carousel />
                <Download />
                <Footer />
            </div>
        )
    }
}

export default home;