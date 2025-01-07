import React from 'react'
import './Navbar.css'
import TopNavbar from './Top-section/TopNavbar'
import BottomNavbar from './Bottom-section/BottomNavbar'

const Navbar = ({isAuthenticated, onLogout}) => {
  return (
    <nav className='nav'>
      <TopNavbar isAuthenticated = {isAuthenticated} onLogout = {onLogout} />
      <BottomNavbar />
    </nav>
  )
}

export default Navbar