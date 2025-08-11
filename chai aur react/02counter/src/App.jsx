import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(0)
  let AddValue=()=>{
    if (counter>=0 & counter<10){
      setcounter(counter+1)}
  }
  let RemoveValue=()=>{
    if(counter>0 & counter<=10){
    setcounter(counter-1)
    }
  }

  return (
    <>
      <h2>Chai aur React</h2>
      <h1>Counter : {counter}</h1>
      <button
      onClick={AddValue}>AddValue</button>
      <br />
      <button
      onClick={RemoveValue}>MinusValue</button>
    </>
  )
}

export default App
