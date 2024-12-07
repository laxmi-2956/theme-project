import { useState } from 'react'
import Navbar from './Compoent/Navbar'
import Content from './Compoent/Content'
import Button from './Compoent/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainsec'>
    <Navbar/>
    <Content/>
    <Button/>
     
    </div>
  )
}

export default App