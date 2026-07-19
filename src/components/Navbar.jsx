import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = ({children , theme}) => {    // we can also pass props in the function or we can write {children} -> for the children and {children , theme} -> for childrena nd theme 
    
    
  return (<div className='nav'>

        <h1>Baby </h1>
        {(children[0])}
        {(children[1])}
        <Navbar2 theme={theme}/>
  </div>
  )
}

export default Navbar