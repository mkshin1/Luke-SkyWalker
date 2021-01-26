import React from "react"

import Form from "./Form"

const People = ({result, error}) => {
    return (
        <div>
            <h1>People Component</h1>
            

        { result !== null && error === null ? (
            <div className="people">
                        
                <p>Name: {result.name}</p>
                <p>Height: {result.height}</p>
                <p>Mass: {result.mass}</p>
                <p>Hair Color: {result.hair_color}</p>
                <p>Skin Color: {result.skin_color}</p>
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

export default People