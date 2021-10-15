import React,{useState, useEffect} from 'react';
//import "./../../../public/users.json";

//fetch
import UserList from './UserList';
import UserSearch from './UserSearch';

function UserContainer(){
    const [data,setData]=useState([]);
    const [serch, setSerch] =useState('....');

    const handleSearch=(event)=>{
        setSerch(event.target.value);
    };

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
                <h6>Wyszukaj:</h6>
                <label>
                    Imie lub nazwisko:
                    <input
                    type="text"
                    name="name"
                    value={serch}
                    onChange={handleSearch}
                ></input>
                </label>
                <UserSearch 
                serch={serch}
                data={data}
                />
            </div>  
        ); 
    
    
}

export default UserContainer;