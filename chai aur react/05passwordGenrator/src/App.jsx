import { useState,useCallback,useEffect, useRef } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // USE REF HOOK
  const passwordRef = useRef(null)

  const generatePassword =useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"
    for(let i=0;i<length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])
  const CopyPasswordToClipBoard = useCallback(()=>{
    // use to give user good effect
    passwordRef.current.select()
    // set selection range to highlight the password buy cpoy all text
    // passwordRef.current.setSelectionRange(0,3)
    navigator.clipboard.writeText(passwordRef.current.value)
    // without ref our password not highlighted
    //window.navigator.clipboard.writeText(passwordRef.current.value)
  },[password])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed])
  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md pt-3 rounded-lg px-4 my-8 h-32 text-orange-500 bg-gray-700'>
        <h1 className=' text-center text-3xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={CopyPasswordToClipBoard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mx-8'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={4}

              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>
              setNumberAllowed((prev)=> !prev)
            } />
            <label htmlFor="NumberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="CharaterInput"
            onChange={()=>
              setCharAllowed((prev)=> !prev)
            } />
            <label htmlFor="CharaterInput">Charaters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
