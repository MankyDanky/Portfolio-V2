import "./Projects.css";
import Project from "./Project";
import BumoIcon from './Bumo.io.png';
import PhotoEditorIcon from './PhotoEditor.png';
import AnimeNetworkGraphIcon from './AnimeNetworkGraph.png';
import WaterlooStudySpotsIcon from './WaterlooStudySpots.png'
import { forwardRef } from "react";

const Projects = forwardRef((props, ref)=> {
    return (
        <div className="Projects" ref={ref}>
            <h1>Projects</h1>
            <Project
            title={"Waterloo Study Spots"}
            icon={WaterlooStudySpotsIcon}
            description={"A full stack app helping UWaterloo students find the right spot to study. Sign in, add reviews, and customize your profile. Uses Node.js, Mongodb, Express, and React."}
            tags={["Node.js", "MongoDB", "MERN"]}
            direction={"left"}
            repository={"https://github.com/MankyDanky/Waterloo-Study-Spots"}
            demo={"https://waterloostudyspots.vercel.app/"}/>
            <Project 
            title={"Bumo.io"}
            description={"An engaging web game that combines sumo and bumping other players. Includes physically accurate collisions coded from scratch, and a Node.js backend."}
            icon={BumoIcon}
            tags={["Javscript", "Node.js", "WebSockets", "Physics"]}
            direction={"right"}
            repository={"https://github.com/MankyDanky/Bumo.io"}/>
            <Project 
            title={"Photo Editor"}
            description={"Allows the user to apply various effects to an imported image, and save the result. Manipulates the fundamental pixel data of an image using image processing algorithms."}
            icon={PhotoEditorIcon}
            tags={["C++", "Image Processing", "File Handling"]}
            direction={"left"}
            repository={"https://github.com/MankyDanky/PhotoEditor"}
            demo={"https://github.com/MankyDanky/PhotoEditor/releases/tag/1.0"}/>
            <Project
            title={"Anime Network Graph"}
            icon={AnimeNetworkGraphIcon}
            description={"A network graph depicting the similarity between the 200 most popular anime on MyAnimeList.net. Utilizes a trie and path finding algorithms to optimize performance."}
            tags={["Javascript", "Graph Theory", "API Usage"]}
            direction={"right"}
            repository={"https://github.com/MankyDanky/Anime-Network-Graph-Plain"}
            demo={"https://anime-network-graph-plain.vercel.app/"}/>
        </div>
    );
});

export default Projects;