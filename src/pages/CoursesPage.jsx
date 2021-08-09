import React, {Component, Fragment} from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class CoursesPage extends Component{
    render(){
        return(

            <Fragment>
                
                <TopNavigation title="Courses" />

                <PageTop pagetitle ="All Courses"/>
                {/* sending a props to the specific page */}

                <AllCourses />

                <Footer />


            </Fragment>


        );
    }
}

export default CoursesPage;