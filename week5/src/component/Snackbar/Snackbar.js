import React from 'react';
import Positions from "./Position";

function Snackbar({position}){
    const styles={
        position:"fixed",
        left: Positions[position].left,
        top: Positions[position].top
    };

    return(
       <div style={styles} className="positionColor">
           <h6>time remaining</h6>
           {/* <h6>{handleClose}</h6> */}
        </div>
    )
}

export default Snackbar;