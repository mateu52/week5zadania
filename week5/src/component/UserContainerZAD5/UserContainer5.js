import React,{useState, useEffect} from 'react';

//fetch
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function UserContainer5(){
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

    return (
            <Router>
                <div>
                    <nav>
                        <ol>
                            <li>
                                <Link to="/"><a>Home</a></Link>
                            </li>
                            <li>
                                <link to="/users"><a>Users</a></link>
                            </li>
                            <li>
                                <link to="/user-profile"><a>UserProfile</a></link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </Router>
        );
}

export default UserContainer5;