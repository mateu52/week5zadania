import React from 'react';

function Dialog({handleClose}){

    return(
        <div className="overlay">
            <h3>tytuł jest tu</h3>
            <h5>to jest treść</h5>
            <button onClick={handleClose}>Confirm</button>
        </div>
    )
}

export default Dialog;