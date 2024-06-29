import "./Navbar.css";

const Navbar =() => {
    return (
        <nav className = "Navigation">
            <div className = "overall">
                <a>Photogragh <span>Website</span></a>
            </div>
            <ul className = "Nav-links">
                <li><a href= "#">Home</a></li>
                <li><a href= "#">About</a></li>
                <li><a href= "#">Gallery</a></li>
                <li><a href= "#">Services</a></li>
                <li><a href= "#">Contacts</a></li>
            </ul>
            </nav>
                );
}
export default Navbar; 