import './App.css';
import Index from "./pages/index";
import React, {useEffect, useRef, useState} from "react";
import 'aos/dist/aos.css'
import AOS from 'aos'
import {Container, Row, Col, FormControl, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Feature from "./pages/features";
import StatusCard from "./pages/components/status-card/StatusCard";
import AppBar from "./pages/components/appBar/AppBar";

let statusCards = [
    {
        "icon": "bx bx-expand-horizontal",
        "count": 'Code',
        "title": "Extract Your Website Code",
        "action": "fade-right",
    },
    {
        "icon": "bx bx-wallet",
        "count": 'Earn',
        "title": "Make Money from Website",
        "action": "fade-left",
    },
    {
        "icon": "bx bx-dollar-circle",
        "count": 'Free',
        "title": "Get Your Website Free",
        "action": "fade-right",
    },
    {
        "icon": "bx bx-paint-roll",
        "count": 'Design',
        "title": "Get Best Templates",
        "action": "fade-left",
    },
]

function App() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (

        <div>
            <AppBar/>
            <Container fluid className='conta'>
                <Row>
                    <Col className='first_text'>
                        <div>
                            <Container>
                                <Row className='rowText'>
                                    <Col className='make'>Make</Col>
                                    <Col>
                                        <Row className='theWorld' data-aos='fade-right'
                                             data-aos-duration="500">The World Knows You</Row>
                                        <Row className='aWebsite' data-aos='fade-right'>A Website</Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <div data-aos='fade-up'
                                         data-aos-duration="3000" className='d'>Your First Website
                                        Begins Here
                                    </div>
                                </Row>
                                <Row>
                                    <Form className="d-flex">
                                        <FormControl
                                            type="search"
                                            size="lg"
                                            placeholder="Enter Your email"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Register</Button>
                                    </Form>
                                </Row>

                            </Container>

                        </div>
                    </Col>
                    <Col className='second' data-aos='fade-left'><Index/></Col>
                </Row>
            </Container>
            <div data-aos='fade-up' className='la'><Feature/></div>


            <div className='featurdss'>
                <div className='fast'>FAST</div>
                <div className='easy'>Simple</div>

            </div>
            <div className='third'
                 style={{backgroundColor: 'whitesmoke', height: '600px', marginRight: '0', paddingRight: '0'}}>
                <h1 className='fe'>Features.
                </h1>
                <Row xs={1} md={2} className="g-lg-5" style={{paddingTop: '30px', paddingLeft: '170px', margin: '0'}}>
                    {
                        statusCards.map((item, index) => (
                            <div style={{height: '40%', width: '40%', paddingRight: '10%', paddingLeft: '10%'}}
                                 key={index}>
                                <StatusCard
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                    action={item.action}
                                />
                            </div>
                        ))
                    }

                </Row>
            </div>
<div className='ford section-padding ' style={{backgroundColor:'black',height:'200px'}}> <h1 style={{color:'white',textAlign:'center'}}>WebTout</h1></div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

            <div id="contact" className="contact-area section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <h1>Get in Touch</h1>
                        <p>Grow Up Together don't need so much energy but it can be easy with help .
                            We give you more than help in our website .Make History with that easy</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 ">
                            <div className="contact">
                                <form className="form" name="enq" method="post" action="contact"
                                      onSubmit="return validation();">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="name" className="form-control" placeholder="Name"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" className="form-control"
                                                   placeholder="Email" required="required"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="text" name="subject" className="form-control"
                                                   placeholder="Subject" required="required"/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea rows="6" name="message" className="form-control"
                                                      placeholder="Your Message" required="required"/>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="submit" value="Send message" name="submit" id="submitButton"
                                                    className="btn btn-contact-bg" title="Submit Your Message!">Send
                                                Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="single_address">
                                <i className="fa fa-map-marker"/>
                                <h4>Our Address</h4>
                                <p>Mabrouka Casablanca Morocco</p>
                            </div>
                            <div className="single_address">
                                <i className="fa fa-envelope"/>
                                <h4>Send your message</h4>
                                <p>Houssam2001mchmch@gmail.com</p>
                            </div>
                            <div className="single_address">
                                <i className="fa fa-phone"/>
                                <h4>Call us on</h4>
                                <p>(+212) 638757499</p>
                            </div>
                            <div className="single_address">
                                <i className="fa fa-clock-o"/>
                                <h4>Work Time</h4>
                                <p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;
