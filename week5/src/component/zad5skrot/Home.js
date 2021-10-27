import React,{useState} from "react";
//uzyjmy tu hookow opcji select dla users
//póżniej przekazemy parametry z komponentu rodzica
//teraz całość zadziała tutaj

function Home(){
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

    const [val, setValue] =useState();
    const [select, setSelect] = useState('');

    const handleValue=(event)=>{
        setValue(event.target.value);
    }
    const handleSelect=()=>{
        setSelect(val);
    }
    return(
        <div>
            <input onChange={handleValue}>

            </input>
            <button onClick={handleSelect}>
                Ok
            </button>
            <h3>To będzie : {val} </h3>
            <h1>: {select} :</h1>
        </div>
    );
}

export default Home;