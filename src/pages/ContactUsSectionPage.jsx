import React, {Component, Fragment} from 'react';
import ContactUsSection from '../components/ContactUsSection/ContactUsSection';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class ContactUsSectionPage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>

            <TopNavigation title="Contact"/>

            <PageTop pagetitle ="Contact Us" />

            <ContactUsSection />

            <Footer />

            </Fragment>
        );
    }
}

export default ContactUsSectionPage;