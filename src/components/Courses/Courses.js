import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ourImages from '../../asset/image/image-course.jpg';

class Courses extends Component {
    render() {
        return (
            <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR COURSES</h1>
                        <Row>

                            <Col lg={6} md={12} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src={ourImages}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">Web Development</h5>
                                        <p className="text-justify courseDescription">I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src={ourImages}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">Web Development</h5>
                                        <p className="text-justify courseDescription" >I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a  className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src={ourImages}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">Web Development</h5>
                                        <p className="text-justify courseDescription" >I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a  className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" src={ourImages}/>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">Web Development</h5>
                                        <p className="text-justify courseDescription" >I build native and cross platfrom mobile app for your business app for your business</p>
                                        <a  className="courseDetails float-left" href="#">Details</a>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default Courses;