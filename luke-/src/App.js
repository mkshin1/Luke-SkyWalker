import React, { useState, useEffect } from "react"
import {Router, navigate} from '@reach/router'
import axios from "axios"
import './App.css';

import Form from "./Components/Form"
import People from "./Components/People"
import Planet from "./Components/Planet"

function App() {

  const [category, setCategory] = useState("")
  const [id, setID] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  

  useEffect(() => {
    fetch(`https://swapi.dev/api/`)
      .then(response => response.json())
      // .then(console.log)
      .then(response => {
        setResult(response)
        })
    }, [])


  const selectHandler = (e) => {
        
      setCategory(e.target.value)
  
  }

  const idHandler = (e) => {
      e.preventDefault()
      setID(e.target.value)
   
  }

  const submitHandler = (e) => {
      e.preventDefault()
      console.log("ive been clicked on")
      axios.get(`https://swapi.dev/api/${category}/${id}`).
      then(response => {
        setResult(response.data)
        setError(null)
      })
      .catch(err => setError("Error Message") )
      navigate(`/${category}/${id}`)
  }
  
  return (
    <div className="App">

        <Form 
        category={category} 
        setCategory={setCategory} 
        id={id} 
        setID={setID} 
        result={result} 
        setResult={setResult} 
        selectHandler={selectHandler}  
        idHandler={ idHandler} 
        submitHandler={submitHandler} />

      <Router>
        <Planet path="/planets/:id" result={result} error={error}/>
        <People path="/people/:id"  result={result} error={error}/>
      </Router>
     
    </div>
  );
}

export default App;
