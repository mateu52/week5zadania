import React from 'react';
function UserList({data}){

    return(
        <div>
            {data.map(function(x){
                    return <div>
                            <p key={x.id}
                            className="tab1">
                                {x.name}, {x.surname}, {x.age} lat.</p>
                        </div>
                })}
        </div>
    )
}

export default UserList;