import React from 'react';
import Positions from "./Position";
import "./SnackBar.css";


function Snackbar({position, severity}){
    const styles={
        position:"fixed",
        left: Positions[position].left,
        top: Positions[position].top
    };
    const checkMsg = (severity) => {
        switch(severity) {
            case "errorMsg" :
                return "errorMsgg";
            case "infoMsg" :
                return "infoMsgg";
        }
    };

    return(
       <div style={styles} className={checkMsg(severity)} >
           <h6>time remaining</h6>
           {/* <h6>{handleClose}</h6> */}
        </div>
    )
}

export default Snackbar;