import React from 'react';
import TopNavigation from './components/TopNavigation/TopNavigation.jsx';
import PageTop from './components/PageTop/PageTop.jsx';

// import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <div>

      <TopNavigation />
      <PageTop pagetitle ="About Me"/>
      {/* sending a props to the specific page */}
      
    </div>

  );
}

export default App;
