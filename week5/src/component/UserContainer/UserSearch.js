import React, {useState} from 'react';
//import "./../../../public/users.json";
import User from './User';
//formularz z polem imie lub nazwisko
//uruchomienie po nacisnieciu "enter"
//przycisk reset do wyzerowania wyszukiwania
//na liscie uzytkownicy spelniajacy kryteria wyszukiwania

//tu wprowadzamy zmienną która szukamy
function UserSearch({data}){
    const [form, setForm]=useState('')
    const [serch, setSerch] =useState('....');
    const handleSearch=(event)=>{
        setSerch(event.target.value);
    };
    const sendForm=(e)=>{
        e.preventDefault();
        //setForm(serch);
    }
    const SendCompon=(e)=>{
        e.preventDefault();
        <div><User 
                    data={data}
                    serch={serch}
                />
                </div>
    }
    return(
        <div>
                <form>
                    <div>
                        <h6>Wyszukaj:</h6>
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
                            onClick={SendCompon}
                            >
                            Enter
                        </button>
                    </div>
                </form>
                {serch}
        </div>
    )
}

export default UserSearch;