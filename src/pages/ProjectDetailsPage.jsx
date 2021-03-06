import React, {Component, Fragment} from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';

class ProjectDetailsPage extends Component{

    componentDidMount(){
        window.scroll(0,0);
    }
    render(){
        return(

            <Fragment>
                
                <TopNavigation title="Project Details" />

                <PageTop pagetitle ="Project Name"/>
                {/* sending a props to the specific page */}

                <ProjectDetails />

                <Footer />


            </Fragment>


        );
    }
}

export default ProjectDetailsPage;