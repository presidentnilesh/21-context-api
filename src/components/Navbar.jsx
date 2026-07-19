import React from 'react'
import Navbar2 from './Navbar2'
import { themeDataContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Navbar=()=>{ 
    
  
  const [theme] = useContext(themeDataContext)
    
  return (
  <div className={theme}>

      <h1>Ayushi</h1>
       
      <Navbar2 />
  </div>
  )
}

export default Navbar