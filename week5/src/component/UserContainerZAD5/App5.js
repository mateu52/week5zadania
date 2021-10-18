import React, {useState,useEffect} from 'react';
import UserContainer5 from './UserContainer5';
import UserList from './UserList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UserSearch from './UserSearch';
import User from './User';

function App5(){
    const [data,setData]=useState([]);

    const getData=()=>{  fetch('users.json'  ,
            {  headers : {  'Content-Type': 'application/json',
            'Accept': 'application/json'  }  }  )
            .then(function(response){  console.log(response)
        return response.json();  })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)  });  }
    useEffect(()=>{
            getData()  },[])

    return(
        <Router>
            <Switch>
                <Route path='/'>
                    <UserContainer5
                    />
                </Route>
                <Route path='/users'>
                    <UserList 
                        data={data}
                    />
                </Route>
                <Route path='/user-profile'>
                    <User
                        data={data}
                    />
                </Route>
            </Switch>
        </Router>
    )
}


export default App5;


/* function App5(){
    return(
        <div>
            <UserContainer5 />
        </div>
    )
} */