import React, {Component, Fragment} from 'react';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class AboutPage extends Component{

    render(){
        return(
            <Fragment>
                
                <TopNavigation />

                <PageTop pagetitle ="About Me"/>
                {/* sending a props to the specific page */}

                <AboutDescription />

                <Footer />


            </Fragment>
        );
    }
}

export default AboutPage;