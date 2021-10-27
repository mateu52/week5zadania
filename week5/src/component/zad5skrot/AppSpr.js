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
    ]
    const [val, setValue] =useState();
    const [select, setSelect] = useState('');
    const handleSelect=()=>{
        setSelect(val);
    }

    return(
        <Router>
            <Conteiner />
            <Switch>
                <Route path="/home">
                    <Home
                        handle={handleSelect}
                    />
                </Route>
                <Route path="/kalk">
                    <Kalk
                    />
                </Route>
            </Switch>
        </Router>

    );
}
export default AppSpr;