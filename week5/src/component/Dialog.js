import React from 'react';

function Dialog({handleClose, handleAbort, handleConfirm}){

    return(
        <div className="overlay">
            <h3>tytuł jest tu</h3>
            <h5>to jest treść</h5>
            <button 
                onClick={handleClose}
                className="confirmButton"
            >OK</button>
            <button
                onClick={handleConfirm}
            >Confirm</button>
            <button
                onClick={handleAbort}
            >Abort</button>
        </div>
    )
}

export default Dialog;