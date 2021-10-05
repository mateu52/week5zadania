import React, {useState, useEffect} from 'react';
import Snackbar from './Snackbar';
import Button from './Button';

function Snackbutton(){
    const [open, setOpen] =useState(false);
    let time = 5000;

    const handleOpen=()=>{
        setOpen(true);
        const timeIndex = () => setTimeout(() => setOpen(false), time);
        timeIndex();
        return timeIndex;
    };

    useEffect(() => {
        return () => {
          clearTimeout(handleOpen);
        };
      });

    return(
        <div>
            {open===false ? (
            <Button
                handleOpen={handleOpen}
            />
            ) : null }
            {open === true ? (
            <Snackbar
                
                //onClose={handleClose}
                //handleClose={handleClose}
                //open={open}
                open={open}
                time={time}
                position="centerBottom"
                //action={action}
            />
            ) : null}
        </div>
    );
}

export default Snackbutton;