import './Navigator.css';
import { NavigatingContext } from './App';
import { useContext } from 'react';

function Navigator(props) {
    const [navigating, setNavigating] = useContext(NavigatingContext);
  
    function hideSidebar(e) {
      setNavigating("notNavigating");
    }

    function goHome(e) {
      hideSidebar();
      props.goHome();
    }

    function goProjects(e) {
      hideSidebar();
      props.goProjects();
    }

    function goAbout(e) {
      hideSidebar();
      props.goAbout();
    }

    function goContact(e) {
      hideSidebar();
      props.goContact();
    }
  
    return (
        <>
        <div className={"NavigatorBackground " + navigating}></div>
        <div className={"Navigator " + navigating}>
            <button className="CloseButton" onClick={hideSidebar}><i className={"fa-solid fa-xmark"}></i></button>
            <button className="NavigationButton" onClick={goHome}>Home&nbsp;&nbsp;<i className={"fa-solid fa-house"}></i></button>
            <button className="NavigationButton" onClick={goProjects}>Projects&nbsp;&nbsp;<i className={"fa-solid fa-wrench"}></i></button>
            <button className="NavigationButton" onClick={goAbout}>About Me&nbsp;&nbsp;<i className={"fa-solid fa-user"}></i></button>
            <button className="NavigationButton" onClick={goContact}>Contact Me&nbsp;&nbsp;<i className={"fa-solid fa-phone"}></i></button>
        </div>
        </>
        
    );
  }

  export default Navigator;