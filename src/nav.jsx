import React from "react";
import Logo from "/airbnb 1.jpg"


function NavBar() {
    return (
        <nav className="nav">
            <img className="nav--logo" src={Logo} alt="AirBnb Logo" />
        </nav>
    )
}

export default NavBar