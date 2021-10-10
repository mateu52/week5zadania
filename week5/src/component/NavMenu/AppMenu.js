import React from 'react';
import NavMenu from './NavMenu';
import "./style.css";

function AppMenu(){
    

    return(
        <div className="app">
            <div className="menuButton">
                Menu
                <NavMenu />
            </div>


        </div>
    );
}

export default AppMenu;