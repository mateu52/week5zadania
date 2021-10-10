import React,{useState} from 'react';
import NavMenu from './NavMenu';
import "./style.css";

function AppMenu(){
    const [cli, setClick]=useState(false);

    const handleClick=()=>{
        if(cli===false){
            setClick(true);
        }
        else{
            setClick(false);
        }
    }

    return(
        <div className="app">
            <div>

                    <button
                    className="menuButton"
                    onClick={handleClick}
                    >Menu</button>
                {cli===true ?(
                        <NavMenu />
                ) :null }
            </div>


        </div>
    );
}

export default AppMenu;