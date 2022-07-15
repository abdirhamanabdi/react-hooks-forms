
import React from "react";

function Form(prop) {
  console.log("prop",prop)
  
  return (
    <form>
      <input type="text" onChange={prop.name1} value={prop.firstName} />
      <input type="text" onChange={prop.name2} value={prop.lastName} />
      <button  type="submit">Submit</button>
    </form>
  );
}

export default Form;