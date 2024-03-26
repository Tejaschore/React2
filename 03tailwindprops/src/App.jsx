import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Tejas",
    age:21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>

    <Card username = "Tejas"/>     
    <Card username="Samruddhi"/>  
    </>
  )
}

export default App
