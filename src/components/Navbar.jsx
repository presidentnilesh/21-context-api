import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = () => {
  return (<div className='nav'>
        <Navbar2 />
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
    </div>
  </div>
  )
}

export default Navbar