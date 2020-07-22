import React, {useEffect} from 'react';
import './Style.css';
import Welcome from './Components/Welcome';
import AboutMe from './Components/AboutMe';
import Projects from './Containers/Projects';
import Resume from './Components/Resume';
import Connect from './Components/Connect';
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
