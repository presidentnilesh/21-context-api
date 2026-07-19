import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}>
        <h2>this is the element in navbar </h2>
        <h4>This is the second one </h4>
      </Navbar>
    </div>
  )
}

export default App