import React, {useState} from 'react';
import Button from './Button';
import Dialog from './Dialog';


function Window(){
    const [open, setOpen]=useState(false);

    const handleClickOpen=()=>{
        setOpen(true);
    };

    const handleClose=()=>{
        setOpen(false);
        console.log("zaakceptowano");
    };
    const handleAbort=()=>{
        console.log("Abort");
    };
    const handleConfirm=()=>{
        console.log("Confirm");
    }



    return(
        <div>
            {open ===false ?(
            <Button
                handleClickOpen={handleClickOpen}
            />
            ) : null}
            {open ===true ?(
                <Dialog
                handleClose={handleClose}
                open={open}
                handleAbort={handleAbort}
                handleConfirm={handleConfirm}
            />
            ) : null}
        </div>
    );

}

export default Window;
