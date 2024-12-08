import './App.css';
import Navbar from './Navbar';
import Navigator from './Navigator';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import { useState, createContext, useRef} from "react";


export const NavigatingContext = createContext()

function App() {
  const [navigating, setNavigating] = useState("notNavigating")
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  function goHome (e) {
    homeRef.current.scrollIntoView({behavior: 'smooth'});
  }
  function goProjects (e) {
    projectsRef.current.scrollIntoView({behavior: 'smooth'});
  }
  function goAbout (e) {
    aboutRef.current.scrollIntoView({behavior: 'smooth'});
  }
  function goContact (e) {
    contactRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <NavigatingContext.Provider value={[navigating, setNavigating]}>
      <div className={"App " + navigating}>
        <Home ref={homeRef}/>
        <hr/>
        <Projects ref={projectsRef}/>
        <hr ref={aboutRef}/>
        <About/>
        <hr/>
        <Contact ref={contactRef}/>
        <Navbar homeClicked={goHome}/>
        <Navigator goHome={goHome} goProjects={goProjects} goAbout={goAbout} goContact={goContact}/>
      </div>
      
    </NavigatingContext.Provider>
    
  );
}

export default App;
