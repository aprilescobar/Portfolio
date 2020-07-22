import React, {useEffect} from 'react';
import './Style.css';
import Welcome from './Containers/Welcome';
import AboutMe from './Containers/AboutMe';
import Projects from './Containers/Projects';
import Resume from './Containers/Resume';
import Connect from './Containers/Connect';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navbar from './Components/Navbar';

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  return (
    <div>
      <Navbar/>
      <Welcome/>
      <AboutMe/>
      <Projects/>
      <Resume/>
      <Connect/>
    </div>
  );
}

export default App;
