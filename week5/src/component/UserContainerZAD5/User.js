import React from 'react';
//wyswietlanie poszczegolnego uzytkownika
//tu mamy zmienną którą szukay lub wiele
import "./style.css";
function User({data,serch}){

    return(
        <div>
            <h1>Znaleziono:</h1>
            {data.map(function(x){
                if (x.name===serch){
                    return <p key={x.id}
                    className="tab">
                        {x.name}, {x.surname}, {x.age} lat.</p>
                }
                if (x.surname===serch){
                    return <p key={x.id}
                    className="tab">
                        {x.name}, {x.surname}, {x.age} lat.</p>
                }
            })}
            </div>
    );
}

export default User;