import React from 'react'
import { createContext } from 'react'

export const themeDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default ThemeContext