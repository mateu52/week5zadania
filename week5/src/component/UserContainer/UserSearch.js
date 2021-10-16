import React, {useState} from 'react';
//import "./../../../public/users.json";
import UserContainer from './UserContainer';
import User from './User';
//formularz z polem imie lub nazwisko
//uruchomienie po nacisnieciu "enter"
//przycisk reset do wyzerowania wyszukiwania
//na liscie uzytkownicy spelniajacy kryteria wyszukiwania
function UserSearch({data}){
    const [form, setForm]=useState('')
    const [serch, setSerch] =useState('....');
    const handleSearch=(event)=>{
        setSerch(event.target.value);
    };
    const sendForm=(e)={
        setForm(serch);
    }
    return(
        <div>
            <h6>Wyszukaj:</h6>
                <form onSubmit={setForm}>
                    <label>
                        Imie lub nazwisko:
                        <input
                            type="text"
                            name="name"
                            value={serch}
                            onChange={handleSearch}
                        >
                        </input>
                    </label>
                    
                    <button 
                        type="button">
                        onClick={sendForm}
                    </button>
                    <button
                        type="button"
                    >
                    </button>
                </form>

                <User 
                    data={data}
                    value={serch}
                    />
        </div>
    )
}

export default UserSearch;