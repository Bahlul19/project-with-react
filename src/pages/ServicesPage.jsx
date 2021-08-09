import React, {Component, Fragment} from 'react';
import Services from '../components/Services/Services';
import ContactUsSection from '../components/ContactUsSection/ContactUsSection';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class ServicesPage extends Component{
    
    render(){
        return(
            <Fragment>

            <TopNavigation />

            <PageTop pagetitle ="Services" />

            <Services />

            <ContactUsSection />

            <Footer />

            </Fragment>
        );
    }
}

export default ServicesPage;