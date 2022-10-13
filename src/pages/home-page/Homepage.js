import React from 'react'
import './homepage.scss';
import background from '../../img/home-page-image.png';
import backgroundExperience from '../../img/test.png';
import Headerhomepage from '../../components/header-home-page/Headerhomepage';

 import kaart from '../../img/kaart.png';


const Homepage = () => {
  return (
    <div className='#'>
      <div className='container-header'>
          <Headerhomepage />
      </div>
        <div className='background-image' style={{ backgroundImage: `url(${background})` }}></div>
        <div className='image-container'>
            <img className='image' src={kaart}></img>
        </div>
        <div className='bg' style={{ backgroundImage: `url(${backgroundExperience})` }}></div>
      </div>
  )
}

export default Homepage