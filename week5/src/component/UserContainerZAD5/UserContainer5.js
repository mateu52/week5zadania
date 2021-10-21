import React,{useState, useEffect} from 'react';
import UserList from './UserList';
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
                <div>
                    <nav>
                        <ol>
                            <li>
                                <Link to="/"><a>Home</a></Link>
                            </li>
                            <li>
                                <Link to="/users"><a>Users</a>
                                
                                </Link>
                            </li>
                            <li>
                                <Link to="/user-profile"><a>UserProfile</a>
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
        );
}

export default UserContainer5;