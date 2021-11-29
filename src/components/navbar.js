import React from "react";
import './navbar.css'
function Navbar(props) {
    return (
        <header>
            <div>
                <nav>
                    <p className='score'>Score: <span>{props.currentScore}</span></p>
                    <p className='score'>Top Score: <span>{props.highScore}</span> </p>
                </nav>
            </div>
        </header>        
    )
}

export default Navbar;