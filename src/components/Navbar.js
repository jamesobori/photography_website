import "./Navbar.css";
import { NavLink,  Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="Navigation">
            <div className="overall">
                <a>Photogragh <span>Website</span></a>
            </div>
            <ul className="Nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="gallery">Gallary</NavLink></li>
                <li><NavLink to="services">Services</NavLink></li>
                <li><NavLink to="contacts">Contacts</NavLink></li>
            </ul>
            <Outlet />
        </nav>
    );
}
export default Navbar; 