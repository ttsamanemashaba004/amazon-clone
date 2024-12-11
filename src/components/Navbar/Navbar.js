import React from 'react'
import './Navbar.css'
import TopNavbar from './Top-section/TopNavbar'
import BottomNavbar from './Bottom-section/BottomNavbar'

const Navbar = () => {
  return (
    <nav className='nav'>
      <TopNavbar />
      <BottomNavbar />
    </nav>
  )
}

export default Navbar