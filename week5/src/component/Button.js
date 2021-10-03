import React from 'react';

function Button({handleClickOpen}){

    return(
        <div className="menuButton">
            <h5>Kliknij i sprawdz </h5>
            <button
                onClick={handleClickOpen}
            >
                sprawdz
            </button>
        </div>
    )
}

export default Button;