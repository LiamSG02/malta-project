import React from "react";
import './navbar.css'
import Malta from '../images/Logo.svg'


export const Navbar = () => {
    return (

    <nav class="nav">
        <div>
            <a href="#">
                <img src={Malta} alt="Logo" />
            </a>
        </div>
    </nav>
    
    )
  }



export default Navbar