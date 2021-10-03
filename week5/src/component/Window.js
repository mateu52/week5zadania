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
            />
            ) : null}
        </div>
    );

}

export default Window;
