import React from "react"

const Form = ({id,selectHandler, idHandler, submitHandler}) => {
   
    return (

        <div>
            <img src="starwars.jpg" alt="starwars pic here"></img>

            <form className="starwars-form" onSubmit={submitHandler}>
                <label>Search For</label>
                <select onClick={selectHandler}>
                    <option>people</option>
                    <option>planets</option>
                </select>
                <input onChange={idHandler} placeholder="ID" className="form-input" value={id}></input>
                <button type="submit">SUBMIT</button>
            </form>
           
        </div>
    )
}

export default Form 

