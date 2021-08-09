import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import CoursesPage from '../pages/CoursesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactUsSectionPage from '../pages/ContactUsSectionPage';
import AboutPage from '../pages/AboutPage';

class AppRoute extends Component{
    render(){
        return(
            <Fragment>

                <Switch>

                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/services" component={ServicesPage}/>
                    <Route exact path="/courses" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactUsSectionPage}/>
                    <Route exact path="/about" component={AboutPage}/>

                </Switch>

            </Fragment>
        );
    }
}
export default AppRoute;