import React from "react";
import '../css/navbar.css';
import { Link } from "react-router-dom";

function NavMenu(){
    return (
        <div>
        <Link to="">Home</Link>
        <Link to="">About me</Link>
        <Link to="">portfolio</Link>
        </div>
    )
}
export default NavMenu;