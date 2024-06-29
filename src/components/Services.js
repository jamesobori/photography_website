import './Services.css';
import cloud from './cloud.png';

const Services = () =>{
    return(
        <div className='services'>
            <div className='services-me'>
                <h3>Welcome to our Services</h3>
                <p>We offer varieties of web development Services</p>
                <p>This includes react,Javascprict,HTML and css</p>
                <p>Also any type of photograph for your choice</p>
            </div>
            <img src= {cloud} alt= "cloud.png" height={300} width={300}/>
        </div>
    )
}
export default Services;