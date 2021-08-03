import React, {Component, Fragment} from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AllProjects from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';

class PortfolioPage extends Component{
    
    render(){
        return(
            <Fragment>

            <TopNavigation />

            <PageTop pagetitle ="Portfolio"/>

            <AllProjects />

            <Footer />

            </Fragment>
        );
    }
}

export default PortfolioPage;