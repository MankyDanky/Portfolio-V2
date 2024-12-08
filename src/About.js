import './About.css';
import MePast from './MePast.jpg'
import {Fade} from 'react-awesome-reveal';

function About () {
    return (
        <Fade triggerOnce="true">
            <div className="About">
                <div className="AboutInteriorContainer">
                    <img className="AboutImage" alt="Kid Me" src={MePast}/>
                    <div className="Spacer"></div>
                    <h3>Aadi kulshrestha...</h3>
                    <h1>About Me</h1>
                    <p>By now you've seen a few of my projects, but this is only a fraction of what I've made throughout my life. 
                        I started programming at the young age of 8 years old after my mom enrolled me in a Scratch video game development 
                        course. I've always been obsessed with videogames, so the idea of making my own fascinated me. From there I got into 
                        various other game engines like GameMaker Studios, and Unity, picking up more advanced programming and maths skills on
                        the way. I published my first game on GameJolt (it was terrible) at the age of 10. When I saw I made 2 whole cents from
                        it I was ecstatic, passionately expressing my excitement to my parents and exclaiming about how I made money! In high school
                        I got into Python, exprimenting with deep learning and getting AI to play games. A remnant of this period is still on my GitHub
                        page, a project where I got AI to play a racing game. In later years of secondary school I picked up C++ and started learning 
                        about competitive programming and DSA. I have competed in numerous programming competitions, including CCC in which my name 
                        was published on the honour roll for my performance. In University I've learnt more about web development, further broadening 
                        my skill set. If there's anything I'd like you to take away from all this, it's that I genuinely love programming and 
                        creating software.</p>
                </div>
            </div>
        </Fade>
        
    );
};

export default About;