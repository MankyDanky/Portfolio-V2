import './Home.css';
import Me from './Me.jpg';
import {Fade} from "react-awesome-reveal";
import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
    return (
        <Fade cascade="true" triggerOnce="true" direction="">
            <div className={"Home"} ref={ref}>
                
                
                <img src={Me} className="HomeIcon" alt="Me"></img>
                <div className={"Description"}>
                    <h1><span style={{color: "#4d8bff"}}>Dedicated</span> and <span style={{color: "#4d8bff"}}>Motivated</span></h1>
                    <p>Hello, I'm <span style={{color: "#4d8bff"}}>Aadi Kulshrestha</span> and I'm an incredibly hard-working Waterloo CS student that's passionate about programming.</p>
                </div>
                
            </div>
        </Fade>
       
    );
});

export default Home;