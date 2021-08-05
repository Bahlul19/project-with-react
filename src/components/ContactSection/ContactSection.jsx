import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>

               <Container>

                    <Row>
                        <Col lg={3} md={3} sm={12}>
                        <p>Text</p>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                        <p>Text</p>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                        <p>Text</p>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                        <p>Text</p>
                        </Col>
                    </Row>

               </Container>

            </Fragment>
        );
    }
}

export default ContactSection;