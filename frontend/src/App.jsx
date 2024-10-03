import { useState } from 'react'
import './App.css'
import Navar from './components/shard/Navar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navar/>
    </>
  )
}

export default App
