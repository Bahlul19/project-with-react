import React, {Component,Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
class TopNavigation extends Component {
    
    
    constructor(props){
        super();

        this.state = {
            //navbarTitle is a property
            navbarTitle : "navTitle",
            navbarLogo : [whiteLogo],
            navVariant: "dark",
            navbarBackground : "navBackground",
            navbarItem : "navItem",
            pageTitle : props.title
        }
    }

    onScroll = () => {
        if(window.scrollY > 100)
        {
            this.setState({navVariant:'light', navbarTitle : 'navTitleScroll', navbarLogo:[blueLogo], navbarBackground:'navBackgroundScroll', navbarItem: 'navItemScroll'})
        }
        else if(window.scrollY < 100)
        {
            this.setState({navVariant:'light', navbarTitle: 'navTitle', navbarLogo:[whiteLogo], navbarBackground:'navBackground', navbarItem: 'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>

                <title>{this.state.pageTitle}</title>

                <Navbar variant={this.state.navVariant} className={this.state.navbarBackground} fixed="top" collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home" className={this.state.navbarTitle}><img src={this.state.navbarLogo} /> Bahlul Siddiquee</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navbarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navbarItem} to="/services">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navbarItem} to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navbarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navbarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color: '#00a8ee'}} className={this.state.navbarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavigation;