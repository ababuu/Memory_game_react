import React from "react";
import './navbar.css'
function Navbar(props) {
    return (
        <header>
            <div>
                <nav>
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Top Score: <span>{props.highScore}</span> </p>
                </nav>
            </div>
        </header>        
    )
}

export default Navbar;