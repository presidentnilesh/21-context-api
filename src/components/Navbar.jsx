import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
  return (<div className='nav'>

        <h1>Baby </h1>
        <Navbar2 theme={props.theme}/>
  </div>
  )
}

export default Navbar