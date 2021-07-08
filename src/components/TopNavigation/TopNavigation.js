import React, {Component,Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';

class TopNavigation extends Component {
    
    
    constructor(){
        super();

        this.state = {
            //navbarTitle is a property
            navbarTitle : "navTitle",
            navbarLogo : [whiteLogo],
            navbarBackground : "navBackground",
            navbarItem : "navItem"
        }
    }

    onScroll = () => {
        if(window.scrollY > 100)
        {
            this.setState({navbarTitle : 'navTitleScroll', navbarLogo:[blueLogo], navbarBackground:'navBackgroundScroll', navbarItem: 'navItemScroll'})
        }
        else if(window.scrollY < 100)
        {
            this.setState({navbarTitle: 'navTitle', navbarLogo:[whiteLogo], navbarBackground:'navBackground', navbarItem: 'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navbarBackground} fixed="top" collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand href="#home" className={this.state.navbarTitle}><img src={this.state.navbarLogo} /> Bahlul Siddiquee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navbarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navbarItem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={this.state.navbarItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={this.state.navbarItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navbarItem} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navbarItem} href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavigation;