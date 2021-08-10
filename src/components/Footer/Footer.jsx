import React, {Component,Fragment} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(

            <Fragment>

                <Container fluid={true} className="footerSection text-center">

                    <Row>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">

                            <h1 className="serviceMainTitle">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faFacebook} />Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube} />YouTube</a>
                           
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">

                            <h1 className="serviceMainTitle">Address</h1>
                            <p className="serviceDescription"> #-Rajanigonda-9, Tikorpara, Sylhet</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> bahlul.tausif@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> +8801731691994</p>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">

                            <h1 className="serviceMainTitle">Information</h1>
                            <Link to="/about" className="footerLink">About Me</Link><br/>
                            <a href="#" className="footerLink">My Resume</a><br/>
                            <Link to="/contact" className="footerLink">Contact Me</Link><br/>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">

                            <h1 className="serviceMainTitle">Legal</h1>
                            <Link to="/refund-policy" className="footerLink">Refund Policy</Link><br/>
                            <Link to="/terms-and-condition" className="footerLink">Terms And Condition</Link><br/>
                            <Link to="/privacy-policy" className="footerLink">Privacy Policy</Link><br/>

                        </Col>

                    </Row>

                </Container>

                <Container fluid={true} className="text-center copyRightSection">

                    <p>portfolio.com &copy; 2021</p>

                </Container>

            </Fragment>

        );
    }
}

export default Footer;