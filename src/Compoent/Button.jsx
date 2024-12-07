import React, { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
const Button = () => {
  const {Update} =useContext(ThemeContext) 
  return (
    <div>
      <button onClick={Update}> click me</button>
    </div>
  )
}

export default Button