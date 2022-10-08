import React from 'react'
import './headerhomepage.scss';


const Headerhomepage = () => {
  return (
    <header>
        <div className='header-left-side'>
            <h1>CampingMolerat</h1>
        </div>
        <div className='header-right-side'>
            <button>Booking</button>
            <button>Support</button>
            <button>Login</button>
            <button>About</button>
        </div>
    </header>
  )
}

export default Headerhomepage