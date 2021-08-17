import React, {Component, Fragment} from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TermsAndCondition from '../components/TermsAndCondition/TermsAndCondition';
import Footer from '../components/Footer/Footer';

class TermsAndConditionPage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    
    render(){
        return(

            <Fragment>

            <TopNavigation title="Terms and Condition" />

            <PageTop pagetitle ="Terms and Condition" />

            <TermsAndCondition />

            <Footer />

            </Fragment>
        );
    }
}

export default TermsAndConditionPage;