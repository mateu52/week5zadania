import React from 'react';
//wyswietlanie poszczegolnego uzytkownika
//tu mamy zmienną którą szukay lub wiele
function User({data,serch}){

    return(
        <div>
            {data.map(function(x){
                if (x.name===serch){
                    return <p key={x.id}>{x.name}, {x.surname}, {x.age} lat.</p>
                }
                if (x.surname===serch){
                    return <p key={x.id}>{x.name}, {x.surname}, {x.age} lat.</p>
                }
            })}
            
            <h5>HELLO</h5>
            <h5>{serch}</h5>
        </div>
    )
}

export default User;