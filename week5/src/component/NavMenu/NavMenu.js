import React from 'react';
import "./style.css";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function NavMenu(){


    return(
        <Router>
            <div >
                <nav >
                    <ol className="navMenu">
                        <li>
                            <Link to="/"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link to="/about"><a>About</a></Link>
                        </li>
                        <li>
                            <Link to="/contact"><a>Contact</a></Link>
                        </li>
                    </ol>
                </nav>
            </div>
        </Router>
    );
}

export default NavMenu;

