import React, {useState,forwardRef} from 'react';
//import "./../../../public/users.json";
import User from './User';
//formularz z polem imie lub nazwisko
//uruchomienie po nacisnieciu "enter"
//przycisk reset do wyzerowania wyszukiwania
//na liscie uzytkownicy spelniajacy kryteria wyszukiwania

//tu wprowadzamy zmienną która szukamy
function UserSearch({data,choice,handleChoice,handleRest}){
    //const [form, setForm]=useState('')
    const [serch, setSerch] =useState('');
    const handleSearch=(event)=>{
        setSerch(event.target.value);
        event.preventDefault();
    };
    const sendRes=(event)=>{
        event.preventDefault();
        setSerch('');
    }
    
    return(
        <div>
            <h1>Wyszukiwarka</h1>
                
                    <div>
                        <h6>Wyszukaj:</h6>
                        <label>
                            Imie lub nazwisko:
                            <input
                                type="text"
                                name="word"
                                onChange={handleChoice}
                                placeholder="Imie || Nazwisko"
                            >
                            </input>
                        </label>
                    </div>
                
                    <label>
                            <button
                                onClick={handleRest}
                                >
                                Reset
                            </button>
                    </label>
            <h3>{choice}</h3>
            <User
                data={data}
                choice={choice}
            />
        </div>
    );
}


export default UserSearch;