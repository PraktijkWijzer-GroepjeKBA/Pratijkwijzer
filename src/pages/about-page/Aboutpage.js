import React from 'react'
import './aboutpage.scss'
import aboutImage from '../../img/about-page-logo.png'
import Headerhomepage from '../../components/header-home-page/Headerhomepage';

const Aboutpage = () => {
  return (
      <div>
        <Headerhomepage />
      <div className='container'>
        <div className='image-container'>
            <div className='about-img-background'></div>
            <img className='about-img' src={aboutImage} alt='#'></img>
        </div>
        <div className='about-container'>
            <div className='about-text left'></div>
            <div className='about-text right'></div>
        </div>
    </div>
    </div>
  )
}

export default Aboutpage