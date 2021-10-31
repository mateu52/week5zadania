import React,{useState} from "react";
//uzyjmy tu hookow opcji select dla users
//póżniej przekazemy parametry z komponentu rodzica
//teraz całość zadziała tutaj

function Home({change, defaultValue}){
    const [name,setName]=useState("Yes");
    const [nm,setNm]=useState("Y");
    function handleN(event) {
        setNm(event.target.value);
    }
    const handleName=(event)=>{
        setName(nm);
        event.preventDefault();
        return;
    }
    return(
        <div>
            <h4>Podaj imię: </h4>
            <input 
                value={nm}
                onChange={handleN}>
            </input> 
            <br></br><br></br>
            <button 
                value={name}
                onClick={handleName}>
                Ok
            </button>
            <button
                value={name}
                onClick={change} >
                OK teraz wyżej
            </button>
            <h3>{name}</h3>
            <h3>{nm}</h3>
            <h3>{defaultValue}</h3>
        </div>
    );
}

export default Home;