import React, {Component, Fragment} from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
import Footer from '../components/Footer/Footer';

class RefundPolicyPage extends Component{
    
    render(){
        return(
            
            <Fragment>

            <TopNavigation title="Refund-Policy" />

            <PageTop pagetitle ="Refund PolicyPage"/>

            <RefundPolicy />

            <Footer />

            </Fragment>
        );
    }
}

export default RefundPolicyPage;