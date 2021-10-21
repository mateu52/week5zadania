import React, {useState,useEffect} from 'react';
import UserContainer5 from './UserContainer5';
import UserList from './UserList';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import UserSearch from './UserSearch';
import User from './User';
//to jest APP
function App5(){
    const [data,setData]=useState([]);
    const [word,setWord]=useState();
    const [user,setUser]=useState(null);

    function serchUser(){
        setUser("Aha");
    }


    const [serch, setSerch] =useState('');
    const handleSearch=(event)=>{
        setSerch(event.target.value);
        event.preventDefault();
    };
    const sendRes=(event)=>{
        event.preventDefault();
        setSerch('');
    }

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
            <UserContainer5 />
            <Switch>
                <Route path='/users'>
                    <UserList
                        data={data}
                        handleSearch={serchUser}
                        handleOnChange={word}
                    />
                </Route>
                <Route path='/user-profile'>
                    <User
                        data={data}
                        serch={serch}
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