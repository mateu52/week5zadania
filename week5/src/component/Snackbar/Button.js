import React from 'react';
import '../../../src/style.css';


function Button({handleOpen}){

    return(
        <div className="menuButton">
            <h5>Podaj props </h5>

            <button
                onClick={handleOpen} 
            >
                sprawdz
            </button>
        </div>
    )
}

export default Button;