import React, { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext';



const Button = () => {

const [theme , setTheme] = useContext(themeDataContext)

    const handelclick = ()=> {
        setTheme('dark')
        
    }
  return (
    <div >
        
        <button className='button' onClick={handelclick}>Change Theme to {theme}</button>
    </div>
  )
}

export default Button