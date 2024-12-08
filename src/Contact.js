import "./Contact.css";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref)=> {
    return (
        <div className="Contact" ref={ref}>
            <h1>Contact Me</h1>
            <div className="ContactButtonContainer">
                <a type="button" className="ContactButton" rel="noreferrer" href='mailto:aadi.kulsh@gmail.com' target="_blank"><i className={"fa-solid fa-envelope"} ></i> Email</a>
                <a type="button" className="ContactButton" rel="noreferrer" href='https://www.linkedin.com/in/aadi-kulshrestha/' target="_blank"><i className={"fa-brands fa-linkedin"} ></i> LinkedIn</a>
                <a type="button" className="ContactButton" rel="noreferrer" href='https://github.com/MankyDanky' target="_blank"><i className={"fa-brands fa-github"} ></i> GitHub</a>
            </div>
        </div>
    );
});

export default Contact
