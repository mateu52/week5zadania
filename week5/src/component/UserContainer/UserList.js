import React from 'react';
//import "./../../../public/users.json";
import UserContainer from './UserContainer';
import UserSearch from './UserSearch';
//wyswietlanie uzytkowanika
function UserList({data}){

    return(
        <div>
            {data.map(function(x){
                    return <div>
                            <p>{x.name}, {x.surname}, {x.age} lat.</p>
                            
                        </div>
                })}
            <UserSearch
                data={data}
                />
        </div>
    )
}

export default UserList;