import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src='/path/to/logo.png' alt='Perfume Logo' />
        </Link>
        <form className='navbar-search'>
          <input type='text' placeholder='Search perfumes...' />
          <button type='submit'>Search</button>
        </form>
        <ul className='navbar-links'>
          <li>
            <Link to='/perfumes'>Perfumes</Link>
          </li>
          <li>
            <Link to='/brands'>Brands</Link>
          </li>
          <li>
            <Link to='/offers'>Offers</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
