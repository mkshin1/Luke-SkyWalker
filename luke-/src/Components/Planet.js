import React from "react"

import Form from "./Form"

const Planet = ({result,error}) => {
    return (
        <div>
            <h1>Planet Component</h1>
            {   result !== null && error === null ? (
                    <div>
                        <p>Name: {result.name}</p>
                        <p>Climate: {result.climate}</p>
                        <p>Surface Water: {result.surface_water}</p>
                        <p>Poplution: {result.population}</p>
                    </div>    
                ) : ""
            } 

            {
                error !== null ? (
                    <div className={error ? ("errorMessage") :""}>
                        {error}
                    </div>
                ) : ""
            }
      
        </div>
    )
}

export default Planet