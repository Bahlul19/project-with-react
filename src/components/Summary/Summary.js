import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

class Summary extends Component{

    render(){
        return(

            <Fragment>

                <Container fluid={true} className="summaryBanner summarySection p-0">

                    <div className="summaryBannerOverlay">

                        <Container className="text-center">

                            <Row>
                                
                                <Col lg={8} md={6} sm={12}>

                                    <Row className="countSection">

                                    <Col>
                                        <h1 className="countNumber">100</h1>
                                        <h4 className="countTitle">Total Project</h4>
                                        <hr className="bg-white w-25 countTitle"/>
                                    </Col>
                                        
                                    <Col>
                                        <h1 className="countNumber">100</h1>
                                        <h4 className="countTitle">Total Project</h4>
                                        <hr className="bg-white w-25 "/>
                                    </Col>

                                    </Row>

                                </Col>

                                <Col lg={4} md={6} sm={12}>

                                <Card className="workCard">
                                
                                <Card.Body>
                                    <Card.Title className="cardTitle text-justify">How I Work</Card.Title>

                                    <Card.Text>

                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering</p>
                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis</p>
                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                                        <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                        
                                    </Card.Text>
                                    
                                </Card.Body>

                                </Card>

                                </Col>

                            </Row>

                        </Container>
                       

                    </div>

                </Container>

             </Fragment>

        );
    }
}

export default Summary;
