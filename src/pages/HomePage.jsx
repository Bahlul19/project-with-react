import React, {Component} from 'react';

import TopBanner from "../components/TopBanner/TopBanner.jsx";

import Services from '../components/Services/Services.jsx';

import TopNavigation from '../components/TopNavigation/TopNavigation.jsx';

import Analysis from '../components/Analysis/Analysis.jsx';

import Summary from '../components/Summary/Summary.jsx';

import RecentProjects from '../components/RecentProject/RecentProjects.jsx';

import Courses from '../components/Courses/Courses.jsx';

import VideoComponent from '../components/Video/VideoComponent.jsx';

import ClientReview from '../components/ClientReview/ClientReview.jsx';

import Footer from '../components/Footer/Footer.jsx';

class HomePage extends Component{

  componentDidMount(){
    window.scroll(0,0);
}

    render(){
            return (
                <div>
            
                  <TopNavigation title="Home"/>
                  <TopBanner />
                  <Services />
                  <Analysis />
                  <Summary />
                  <RecentProjects />
                  <Courses />
                  <VideoComponent />
                  <ClientReview />
                  <Footer />
                  
                </div>
            
              );
    }
}

export default HomePage;