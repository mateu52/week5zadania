import React from 'react';
//import "./../../../public/users.json";
import UserSearch from './UserSearch';
//wyswietlanie poszczegolnego uzytkownika
function User({data,serch}){

    return(
        <div>
            {data.map(function(x){
                if (x.name===serch){
                    return <p>{x.name}, {x.surname}, {x.age} lat.</p>
                }
                if (x.surname===serch){
                    return <p>{x.name}, {x.surname}, {x.age} lat.</p>
                }
            })}
        </div>
    )
}

export default User;