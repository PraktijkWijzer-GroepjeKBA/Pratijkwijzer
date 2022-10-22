import React from 'react'
import './aboutpage.scss'
import Aboutimage from '../../img/about-page-logo.png'

const Aboutpage = () => {
  return (
    <div className='#'>
        <div className='image-container'>
            <div className='about-img-background'></div>
            <img className='about-img' src={Aboutimage} alt='#'></img>
        </div>
        <div className='about-container'>
            <div className='about-text left'></div>
            <div className='about-text right'></div>
        </div>
    </div>
  )
}

export default Aboutpage