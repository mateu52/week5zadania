import React from 'react';

function Snackbar({handleClose}){
    return(
       <div>
           <h6>time remaining</h6>
           <h6>{handleClose}</h6>
        </div>
    )
}

export default Snackbar;