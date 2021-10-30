import React,{useState} from "react";
//uzyjmy tu hookow opcji select dla users
//póżniej przekazemy parametry z komponentu rodzica
//teraz całość zadziała tutaj

function Home({change, wart}){
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
    const [name,setName]=useState("Yes");
    const [nm,setNm]=useState("Y");
    const handleN=(event)=>{
        setNm(event);
        return;
    }
    const handleName=()=>{
        setName(nm);
        return;
    }
    return(
        <div>
            <h4>Podaj imię: </h4>
            <input onChange={handleN}>
            </input>
            <br></br><br></br>
            <button onClick={handleName}>
                Ok
            </button>
            <h3>{name}</h3>
        </div>
    );
}

export default Home;