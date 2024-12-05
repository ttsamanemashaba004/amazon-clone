import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <Link to="/products">Products</Link>
    </nav>
  )
}

export default Navbar