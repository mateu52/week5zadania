import React from 'react';
import UserSearch from './UserSearch';
import {data} from './App5';
function UserList({data}){

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
            <UserSearch 
            data={data} 
            />
            
        </div>
    )
}

export default UserList;