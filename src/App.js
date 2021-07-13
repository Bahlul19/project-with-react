import React from 'react';

import TopBanner from "./components/TopBanner/TopBanner";

import Services from './components/Services/Services';

import TopNavigation from './components/TopNavigation/TopNavigation';

import Analysis from './components/Analysis/Analysis';

import Summary from './components/Summary/Summary';

import RecentProjects from './components/RecentProject/RecentProjects';

import Courses from './components/Courses/Courses';

import VideoComponent from './components/Video/VideoComponent';

function App() {
  return (
    <div>

      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProjects />
      <Courses />
      <VideoComponent />
      
    </div>

  );
}

export default App;
