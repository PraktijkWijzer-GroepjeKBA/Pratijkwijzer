import React from 'react'
import './headerfrontpage.scss';

import { Link } from "react-router-dom";


const Headerfrontpage = () => {
  return (
    <header>
        <div className='header-title'>CampingMolerat</div>
        <div className='header-button'>
            <Link to='Homepage'><button className='home-btn'>Home</button></Link>
            <Link to='Login'><button className='login-btn'>Login</button></Link> 
            <button className='about-btn'>About</button>
        </div>
    </header>
  )
}

export default Headerfrontpage;
