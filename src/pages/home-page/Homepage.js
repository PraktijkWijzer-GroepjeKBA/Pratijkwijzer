import React from 'react'
import './homepage.scss';
import background from '../../img/home-page-image.png';


const Homepage = () => {
  return (
        <div style={{ backgroundImage: `url(${background})` }} className='background-image'></div>
  )
}

export default Homepage