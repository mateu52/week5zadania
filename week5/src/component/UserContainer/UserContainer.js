import React,{useState, useEffect} from 'react';
//import "./../../../public/users.json";

//fetch
import UserList from './UserList';
import UserSearch from './UserSearch';

function UserContainer({serch}){
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
                <UserList 
                data={data}
                />
                <UserSearch 
                data={data}
                />
                
            </div>  
        ); 
    
    
}

export default UserContainer;