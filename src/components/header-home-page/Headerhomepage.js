import React from 'react'
import './headerhomepage.scss';

import { Link } from "react-router-dom";

const Headerhomepage = () => {
  return (
    <header>
        <div className='header-left-side'>
            <h1>CampingMolerat</h1>
        </div>
        <div className='header-right-side'>
            <button>Booking</button>
            <Link to="Support"><button>Support</button></Link>
            <button>Login</button>
            <button>About</button>
        </div>
    </header>
  )
}

export default Headerhomepage