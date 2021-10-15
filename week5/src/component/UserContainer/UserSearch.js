import React from 'react';
//import "./../../../public/users.json";
import UserContainer from './UserContainer';
//formularz z polem imie lub nazwisko
//uruchomienie po nacisnieciu "enter"
//przycisk reset do wyzerowania wyszukiwania
//na liscie uzytkownicy spelniajacy kryteria wyszukiwania
function UserSearch({serch, data}){

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

export default UserSearch;