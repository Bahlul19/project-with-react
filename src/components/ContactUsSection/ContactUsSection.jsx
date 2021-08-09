import React, {Component, Fragment} from 'react';

import {Container, Row, Col, Button, Form} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

class ContactUsSection extends Component {
    render(){
        return(
            <Fragment>

                <Container className="mt-5">

                <Row>
                <Col lg={6} md={6} sm={12}>
                <h1 className="serviceName">Quick Connect</h1>

                <Form>

                <Form.Group className="mb-3">

                    <Form.Label className="serviceDescription">Name</Form.Label>
                    <Form.Control type="text" />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label className="serviceDescription">Email Address</Form.Label>
                    <Form.Control type="email" />
                    
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="serviceDescription">Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                </Form>

                </Col>

                <Col lg={6} md={6} sm={12}>
                <h1 className="serviceName">Address</h1>
                <p className="serviceDescription"> #-Rajanigonda-9, Tikorpara, Sylhet</p>
                <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> bahlul.tausif@gmail.com</p>
                <p className="serviceDescription  "><FontAwesomeIcon icon={faPhone} /> +8801731691994</p>
                </Col>
                </Row>

                </Container>

            </Fragment>
        );
    }
}

export default ContactUsSection;