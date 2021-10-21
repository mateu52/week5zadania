import React, {useState,forwardRef} from 'react';
//import "./../../../public/users.json";
import User from './User';
//formularz z polem imie lub nazwisko
//uruchomienie po nacisnieciu "enter"
//przycisk reset do wyzerowania wyszukiwania
//na liscie uzytkownicy spelniajacy kryteria wyszukiwania

//tu wprowadzamy zmienną która szukamy
const UserSearch=forwardRef(
    ({data, handleSearch,handleOnChange,sendRes,serch})=>{
    //const [form, setForm]=useState('')
    const sendForm=(e)=>{
        e.preventDefault();
    }

    return(
        <div>
            <h1>Wyszukiwarka</h1>
                <form onSubmit={sendForm}>
                    <div>
                        <h6>Wyszukaj:</h6>
                        <label>
                            Imie lub nazwisko:
                            <input
                                type="text"
                                name="word"
                                onChange={handleOnChange}
                                placeholder="Imie || Nazwisko"
                            >
                            </input>
                        </label>
                    </div>
                </form>
                <label>
                            <button 
                                onClick={handleSearch}>
                                Search
                            </button>
                            <button
                                onClick={sendRes}
                                >
                                Reset
                            </button>
                        </label>
        </div>
    );
}
);

export default UserSearch;