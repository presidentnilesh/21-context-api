import React from 'react'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}/>
    </div>
  )
}

export default App