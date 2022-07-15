import React from "react";

function DisplayData(prop){
    return (
        <div>
            <h2>Mater</h2>
            <h1>{prop.firstName}</h1>
            <h1>{prop.lastName}</h1>
        </div>
    )

}

export default DisplayData