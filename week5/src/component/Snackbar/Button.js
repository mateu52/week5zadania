import React from 'react';

function Button({handleOpen}){

    return(
        <div className="menuButton">
            <h5>Click to timer </h5>
            <button
                onClick={handleOpen}
            >
                sprawdz
            </button>
        </div>
    )
}

export default Button;