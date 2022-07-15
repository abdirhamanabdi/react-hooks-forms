import React,{useState} from "react";
import Form from "./Form";
import DisplayData from "./display";

function Parent(){
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  
    function handleFirstName(event){
        setFirstName(event.target.value)
    }
  
    function handleLastName(event){
      setLastName(event.target.value)
    }

    
    return (
      <div>
        <Form 
            name1 = {handleFirstName}
            name2 = {handleLastName}
            firstName = {firstName}
            lastName = {lastName}
        />
        <DisplayData
        firstName = {firstName}
        lastName = {lastName}
        />

      </div>

    )
}

export default Parent