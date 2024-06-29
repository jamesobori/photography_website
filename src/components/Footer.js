import "./Footer.css";

const footer = () => {
    return (
        <div className="footer">
            <div id="footer-me">
                <p>You can book us in any service of your choice.</p>
                <p>Click the icons below for any service you get interested in.</p>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <div className="icon">
                <a href="#home"><i class="fa-solid fa-house"></i>Home</a>
                <a href="#About"><i class="fa-solid fa-person-dress"></i>About</a>
                 <a href="#Gallery"><i class="fa-solid fa-camera-retro"></i>Gallery</a>
                 <a href="#Services"><i class="fa-brands fa-servicestack"></i>service</a>
                 <a href="#Contact"><i class="fa-solid fa-address-book"></i>Contact</a>
                 <h3>For my tutorials Click the icons below</h3>
                 <a href="#Instagram"><i class="fa-brands fa-square-instagram"></i>Instagram</a>
                 <a href="#Facebook"><i class="fa-brands fa-facebook"></i>Facebook</a>
                 <a href="#Youtube"><i class="fa-brands fa-youtube"></i>Youtube</a>
                </div>
            </div>

        </div>
    )
}
export default footer;