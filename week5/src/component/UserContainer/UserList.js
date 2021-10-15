import React from 'react';
//import "./../../../public/users.json";
import UserContainer from './UserContainer';
//wyswietlanie uzytkowanika
function UserList({data}){

    return(
        <div>
            {data.map(function(x){
                    return <div>
                            <p>{x.name}, {x.surname}, {x.age} lat.</p>
                            
                        </div>
                })}
        </div>
    )
}

export default UserList;