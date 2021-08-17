import React, {Component, Fragment} from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';
import Footer from '../components/Footer/Footer';

class PrivacyPolicyPage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(

            <Fragment>

            <TopNavigation title="Privacy Policy" />

            <PageTop pagetitle ="Privacy Policy" />

            <PrivacyPolicy />

            <Footer />

            </Fragment>
        );
    }
}

export default PrivacyPolicyPage;