import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import blackPhone from '../../asset/image/black11.jpg';
import whitePhone from '../../asset/image/white11.jpg';
import redPhone from '../../asset/image/red11.jpg';


class ProjectDetails extends Component{
    render(){
        return(

            <Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                        <img src={blackPhone} />
                        </Col>

                        <Col lg={6} md={6} sm={6}>
                            <h2>iPhone 11</h2>
                            <p className="serviceDescription">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                <ul>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                </ul>
                                <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>

            </Fragment>

        );
    }
}

export default ProjectDetails;