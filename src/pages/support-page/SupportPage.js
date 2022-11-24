import React from 'react';
import HeaderSupportPage from '../../components/header-support-page/headerSupportPage';
import './SupportPage.scss'
import image from '../../img/home-page-image.png'

const SupportPage = () => {
    return (
        <div>
            <HeaderSupportPage />

            <div className='box'>
                <div className='box__left-container'>
                    <h2>Choose your problem</h2>
                    <button className='button'>Repairs</button>
                    <button className='button'>Cleaning</button>
                    <button className='button'>Other</button>
                </div>
                <div className='box__right-container'>
                    <div className='image-container-support'>
                        <img src={image} alt="img"></img>
                    </div>
                    <div className='information-container'>
                        <h3>Telephone:  + 958305398</h3>
                        <h3>Email: 433@gmail.com</h3>
                        <h3>Location: Afrika, uganda</h3>
                        <h3>Available times: Mo-Su 8:00-22:00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportPage
