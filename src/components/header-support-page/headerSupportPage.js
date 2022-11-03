import React from 'react'
import './headerSupportPage.scss';

import { Link } from 'react-router-dom';

const HeaderSupport = () => {
  return (
    <header>
      
          <div className='title'>CampingMolerat &nbsp; <span>-> Support</span></div>

          <div className='buttons'>
          <Link to='../Login'><button id="b1">Login</button></Link>
          <Link to='../Homepage'><button id="b2">Home</button></Link>
          </div>

      
    </header>
  )
}

export default HeaderSupport