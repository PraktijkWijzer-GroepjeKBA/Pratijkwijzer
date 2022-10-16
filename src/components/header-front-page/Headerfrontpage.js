import React from 'react'
import './headerfrontpage.scss';

import { Link } from "react-router-dom";


const Headerfrontpage = () => {
  return (
    <div className='header-front-page'>
        <div className='header-title'>CampingMolerat</div>
        <div className='header-button'>
            <Link to='Homepage'><button className='home-btn'>Home</button></Link>
            <Link to='Login'><button className='login-btn'>Login</button></Link> 
            <button className='about-btn'>About</button>
        </div>
    </div>
  )
}

export default Headerfrontpage;
