import React from 'react'
import './headerSupportPage.scss';

import { Link } from 'react-router-dom';

const HeaderSupport = () => {
  return (
    <header>
      <div className='supportNav'>
          <div className='title'>CampingMolerat <span>/ Support</span></div>
          <button>Logout</button>
          <Link to='../Homepage'><button className='home-btn'>Home</button></Link>
      </div>
    </header>
  )
}

export default HeaderSupport