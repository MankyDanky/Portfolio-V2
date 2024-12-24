import './Project.css';
import {Fade} from 'react-awesome-reveal';

function Project(props) {
    const tags = props.tags
    const tagItems = tags.map(tag => <li key={tag}>{tag}</li>)
    return (
        <Fade direction={props.direction} triggerOnce="true">
            <div className={"Project " + props.direction}>
                <img src={props.icon} alt="ProjectIcon" className="ProjectIcon"></img>
                <div className={"ProjectDescription " + props.direction}>
                    <h2>{props.title}</h2>
                    <ul className="Tags">{tagItems}</ul>
                    <p>{props.description}</p>
                    <a className="RepoButton" href={props.repository} rel="noreferrer" target="_blank">Visit Repo</a>
                    {props.demo && <a className="RepoButton" style={{marginLeft: "8vw", marginLeft: "8vw"}} href={props.demo} rel="noreferrer" target="_blank">Demo</a>}
                </div>
            </div>
        </Fade>
        
    );
}

export default Project;