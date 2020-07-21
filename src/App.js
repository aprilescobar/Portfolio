import React from 'react';
import './Style.css';
import Welcome from './Components/Welcome';
import AboutMe from './Components/AboutMe';
import Projects from './Containers/Projects';
import Resume from './Components/Resume';
import Connect from './Components/Connect';

const App = () => {
  return (
    <div>
      <Welcome/>
      <AboutMe/>
      <Projects/>
      <Resume/>
      <Connect/>
    </div>
  );
}

export default App;
