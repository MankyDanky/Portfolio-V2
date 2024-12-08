import './Navbar.css';
import { NavigatingContext } from './App';
import { useContext } from 'react';

function Navbar(props) {
  const [navigating, setNavigating] = useContext(NavigatingContext);

  function showSidebar(e) {
    e.preventDefault();
    setNavigating("navigating");
    console.log(navigating);
  }

  return (
    <div className="Navbar">
        <button className="SidebarButton" onClick={showSidebar}><i className={"fa-solid fa-bars"}></i></button>
        <button className="HomeButton" onClick={props.homeClicked}>Aadi Kulshrestha</button>
    </div>
  );
}

export default Navbar;