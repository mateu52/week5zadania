import React, {useState} from 'react';
import UserSearch from './UserSearch';
import {data} from './App5';
function UserList({data,choice,handleChoice,handleRest}){
    const [value, setValue]=useState("");
    return(
        <div>
            <h1>Lista</h1>
            {data.map(function(x){
                    return <div>
                            <p key={x.id}
                            className="tab1">
                                {x.name}, {x.surname}, {x.age} lat.</p>
                        </div>
                })}
            <h3>{choice}</h3>
            <UserSearch 
                data={data} 
                choice={choice}
                handleChoice={handleChoice}
                handleRest={handleRest}
            />
            
        </div>
    )
}
export default UserList;