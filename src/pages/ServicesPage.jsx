import React, {Component, Fragment} from 'react';
import Services from '../components/Services/Services';
import ContactUsSection from '../components/ContactUsSection/ContactUsSection';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class ServicesPage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(
            <Fragment>

            <TopNavigation title="Services" />

            <PageTop pagetitle ="Services" />

            <Services />

            <ContactUsSection />

            <Footer />

            </Fragment>
        );
    }
}

export default ServicesPage;