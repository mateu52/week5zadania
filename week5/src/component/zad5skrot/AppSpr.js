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
    const [vare, setVare]=useState('xXx');
    const [name, setName]=useState('BoS');
    const [select, setSelect] = useState('');

    const handleSelect=(event)=>{
        setSelect(event);
    }
    const handleName=(event)=>{
        setName(event.target.value);
    }

    return(
        <Router>
            <Conteiner />
            <Switch>
                <Route path="/home">
                    <Home 
                        users={users}
                        selectOn={handleSelect}
                    />
                </Route>
                <Route path="/kalk">
                    <Kalk
                        selectedON={select}
                    />
                </Route>
            </Switch>
        </Router>
            

    );
}
export default AppSpr;