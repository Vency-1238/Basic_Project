import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green text-yellow">Tailwind test</h1>
     <Card  user="Vency"/>
     <Card  user="selvi"/>
     <Card  user="Dev"/>
    </>
  )
}

export default App
