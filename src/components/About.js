import "./About.css"
import flower from './flower.png';

const About = () => {
    return (
        <div className="about">
            <div className='about-me'>
              <h3>About Me</h3>
              <p>I love Programming and is one of my interesting skills in my life</p>
              <p>Consistency and hardwork in Programming pays</p>
            </div>
            <div className="tea">
           <img src={ flower} alt="flower.png " height={300} width={300}/>
           </div>
        </div>
    );
}
export default About;