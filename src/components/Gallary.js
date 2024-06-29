
import './Gallary.css';
import web from "./web.png";
import land from "./land.png";
import grapher from "./grapher.png"

const Gallary = () => {
    return (
        <div className='gallary'>
            <div className='gallary-me'>
            <h3>My Gallary photography</h3>
                <p>Build up your mind with react</p>
                <p>My power my react my vision my future</p>
                <p>the Omondi's photographer and web builder</p>
                <div className='pich'>
                <img src={web} alt="web.png" height={300} width={300} />
                <img src={land} alt="land.png" height={300} width={300} />
                <img src={grapher} alt="grapher.png" height={300} width={300} />
                </div>


                </div>

        </div>
    );
}
export default Gallary;