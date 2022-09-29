import React from 'react'
import './header.scss';

import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
        <div className='header-title'>CampingMolerat</div>
        <div className='header-button'>
            <button className='home-btn'>Home</button>
            <Link to='Login'><button className='login-btn'>Login</button></Link> 
            <Link to='Signup'><button className='support-btn'>Support</button></Link> 
            <button className='about-btn'>About</button>
        </div>
    </header>
  )
}

export default Header;
