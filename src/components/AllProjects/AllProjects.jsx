import React, {Component, Fragment} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import blackPhone from '../../asset/image/black11.jpg';
import whitePhone from '../../asset/image/white11.jpg';
import redPhone from '../../asset/image/red11.jpg';
import {Link} from 'react-router-dom';

class AllProjects extends Component{

    render(){
        return(

            <Fragment>
                
            <Container className="text-center mt-5">

                <Row>

                    <Col lg={4} md={6} sm={12} className="p-2">
                    <Card className="projectCard">
                    <img src={blackPhone} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDescription">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                    </Card.Body>
                    </Card>

                    </Col>

                    <Col lg={4} md={6} sm={12} className="p-2">

                    <Card className="projectCard">
                    <img src={whitePhone} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDescription">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                    </Card.Body>
                    </Card>

                    </Col>

                    <Col lg={4} md={6} sm={12} className="p-2">

                    <Card className="projectCard">
                    <img src={redPhone} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDescription">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                    </Card.Body>
                    </Card>

                    </Col>

                    <Col lg={4} md={6} sm={12} className="p-2">
                    <Card className="projectCard">
                    <img src={blackPhone} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDescription">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                    </Card.Body>
                    </Card>

                    </Col>

                    <Col lg={4} md={6} sm={12} className="p-2">

                    <Card className="projectCard">
                    <img src={whitePhone} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDescription">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                    </Card.Body>
                    </Card>

                    </Col>

                    <Col lg={4} md={6} sm={12} className="p-2">

                    <Card className="projectCard">
                    <img src={redPhone} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDescription">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                    </Card.Body>
                    </Card>

                    </Col>

                </Row>

            </Container>
        </Fragment>


        );
    }
}

export default AllProjects;