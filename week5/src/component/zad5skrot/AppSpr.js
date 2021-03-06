import React, { useState } from "react";
import Conteiner from "./Conteiner";
import Kalk from "./Kalk";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  //wywulac tu przekzanie funkcji ktora 
  //w komponencie dziecka
  //wskaże nam parametr
  //który tu wyswietlimy
function AppSpr(){
    const users = [
        {
            id:1,
            name:"Adam",
            age:"27"
        },
        {
            id:2, 
            name:"Henry",
            age:"44"
        },
        {
            id:2,
            name:"Henry",
            age:"44"
        }
    ];
    const [val,setValue] =useState("OoK");
    
    const handleValue=(event)=>{
        setValue(event.target.value);
    }
    return(
        <Router>
            <Conteiner />
            <Switch>
                <Route path="/home">
                    <Home
                        defaultValue={val}
                        change={handleValue}
                    />
                </Route>
                <Route path="/kalk">
                    <Kalk
                    handle={val}
                    />
                </Route>
            </Switch>
        </Router>

    );
}
export default AppSpr;