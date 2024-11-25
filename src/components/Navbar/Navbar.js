import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/cart'>Cart</a></li>
        <li><a href='/login'>Login</a></li>
      </ul>
    </div>
  )
}

export default Navbar