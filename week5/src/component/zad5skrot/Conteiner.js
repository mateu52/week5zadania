import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function Conteiner(){

    return(
        <div>
            <nav>
                <ol>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/kalk">Kalkulator danych</Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
}
export default Conteiner;