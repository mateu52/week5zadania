import React from 'react';
import "./style.css";
function NavMenu(){


    return(
        <div>
            <ol className="navMenu">
                <li className="navOpt"><a>home</a></li>
                <li className="navOpt"><a>about</a></li>
                <li className="navOpt"><a>contact</a></li>
            </ol>
        </div>
    );
}

export default NavMenu;