import React from 'react'
import './Navbar.css'
import logo from './logo.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='navbar-links'>
            <div className='links'>Home</div>
            <div className='links'>Integrations</div>
            <div className='links'>Pricing</div>
            <div className='links'>About</div>
        </div>
        <div className='navbar-button'>
            Get Started
        </div>
    </div>
  )
}
