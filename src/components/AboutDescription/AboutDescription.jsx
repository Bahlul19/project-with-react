import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class AboutDescription extends Component{
    render(){
        return(
            <Fragment>

                <Container>

                    <Row>

                        <Col sm={12} md={12} mlg={12}>

                            <h1 className="serviceName">Who I Am</h1>
                            <hr/>
                            <p className="serviceDescription">Software Engineer who worked on software industry from 2017</p>

                            <h1 className="serviceName">My Mission</h1>
                            <hr/>
                            <p className="serviceDescription">Teach the nation about coding</p>

                            <h1 className="serviceName">My Vission</h1>
                            <hr/>
                            <p className="serviceDescription">Want open a start-up company</p>
                        
                        </Col>

                    </Row>

                </Container>


            </Fragment>
        );
    }
}

export default AboutDescription;