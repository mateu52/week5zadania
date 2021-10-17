import React, {useState} from 'react';
//import "./../../../public/users.json";
import User from './User';
//formularz z polem imie lub nazwisko
//uruchomienie po nacisnieciu "enter"
//przycisk reset do wyzerowania wyszukiwania
//na liscie uzytkownicy spelniajacy kryteria wyszukiwania

//tu wprowadzamy zmienną która szukamy
function UserSearch({data}){
    //const [form, setForm]=useState('')
    const [serch, setSerch] =useState('');
    const handleSearch=(event)=>{
        setSerch(event.target.value);
        event.preventDefault();
    };
    const sendForm=(e)=>{
        e.preventDefault();
    }
    const sendRes=(event)=>{
        event.preventDefault();
        setSerch('');
    }

    return(
        <div>
                <form onSubmit={sendForm}>
                    <div>
                        <h6>Wyszukaj:</h6>
                        <label>
                            Imie lub nazwisko:
                            <input
                                type="text"
                                name="name"
                                value={serch}
                                onChange={handleSearch}
                                placeholder="Imie || Nazwisko"
                            >
                            </input>
                        </label>
                    </div>
                </form>
                <label>
                            <button
                                onClick={sendRes}
                                >
                                Reset
                            </button>
                        </label>
                <User
                    data={data}
                    serch={serch}
                />
        </div>
    )
}

export default UserSearch;