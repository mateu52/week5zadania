import React, { useState } from "react";
import Conteiner from "./Conteiner";
import Kalk from "./Kalk";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
function AppSpr(){
    const [name, setName]=useState();
    const [sume, setSume]=useState();

    return(
        <Router>
            <Conteiner />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/kalk">
                    <Kalk />
                </Route>
            </Switch>
        </Router>
            

    );
}
export default AppSpr;