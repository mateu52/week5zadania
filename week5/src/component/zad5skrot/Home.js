import React,{useState} from "react";

function Home({selectOn}){
    const [val, setValue] =useState();
    const handleUsers=(event)=>{
        event.target.value=":)";
    }
    const [sume, setSume]=useState();
    const [name, setName]=useState('BoS');

    const handleName=(event)=>{
        setName(event.target.value);
    }
    const handleVare=(event)=>{
        setVare(event.target.value);
    }
    return(
        <div>
            
        </div>
    );
}

export default Home;