import React from 'react';
//import "./../../../public/users.json";
import UserContainer from './UserContainer';
import User from './User';
//formularz z polem imie lub nazwisko
//uruchomienie po nacisnieciu "enter"
//przycisk reset do wyzerowania wyszukiwania
//na liscie uzytkownicy spelniajacy kryteria wyszukiwania
function UserSearch({serch, data}){
    const [serch, setSerch] =useState('....');
    const handleSearch=(event)=>{
        setSerch(event.target.value);
    };
    return(
        <div>
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
                <User 
                data={data}
                value={serch}
                />
            
        </div>
    )
}

export default UserSearch;