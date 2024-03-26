import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter]= useState(5)

  // let counter = 5;

  const addValue = () =>{
    // counter = counter +1
    setCounter(counter+1)
  
  }

  const removevalue = ()=> {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button><br></br>
      <button onClick={removevalue}>Remove value: {counter}</button>
     
    </>
  )
}

export default App
