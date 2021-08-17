import React, {Component, Fragment} from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import RefundPolicy from '../components/RefundPolicy/RefundPolicy';
import Footer from '../components/Footer/Footer';

class RefundPolicyPage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(

            <Fragment>

            <TopNavigation title="Refund Policy" />

            <PageTop pagetitle ="Refund Policy"/>

            <RefundPolicy />

            <Footer />

            </Fragment>
        );
    }
}

export default RefundPolicyPage;