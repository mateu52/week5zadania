import React,{useState} from "react";
//uzyjmy tu hookow opcji select dla users
//póżniej przekazemy parametry z komponentu rodzica
//teraz całość zadziała tutaj

function Home({handle,hName}){
    const users = [
        {
            id:1,
            name:"Adam",
            age:"27"
        },
        {
            id:2,
            name:"Henry",
            age:"44"
        },
        {
            id:2,
            name:"Henry",
            age:"44"
        }
    ]
    const [name,setName]=useState("");
    const handleN=(event)=>{
        setName(event)
    }
    return(
        <div>
            <h4>Podaj imię: </h4>
            <input onClick={hName}>
            </input>
            <button>set name</button>
            <br></br><br></br>
            <button onClick={handle}>
                Ok
            </button>
            <h2>{hval}</h2>
            <h3>{name}</h3>
        </div>
    );
}

export default Home;