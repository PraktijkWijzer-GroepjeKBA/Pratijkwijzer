import React from 'react'
import './homepage.scss';
import background from '../../img/home-page-image.png';
import backgroundExperience from '../../img/test.png';
import Headerhomepage from '../../components/header-home-page/Headerhomepage';
import Footer from '../../components/footer/Footer';

 import kaart from '../../img/kaart.png';
 import campingSpots from '../../img/camping-spots.png';


const Homepage = ({ user }) => {
  return (
    <div className='#'>
      <div className='container-header'>
          <Headerhomepage />
      </div>
        <div className='background-image' style={{ backgroundImage: `url(${background})` }}></div>
        <div className='image-container'>
            <img className='image' src={kaart}></img>
        </div>
      <div className='bg-container' style={{ backgroundImage: `url(${backgroundExperience})` }}>
        <div className='row-box'>
          <div className='background-text'>
            <h2>Explore Camps</h2>
          </div>
          <div className='row'>
            <div className='card'>
              <img className='camping-spot-image' src={campingSpots}></img>
              <div className='card-text'>Lorem ipsum Lorem ipsum Lorem ipsum</div>
              <div className='card-length'>10x10 Meters</div>
              <div className='price-spot'>€50,- per day</div>
              <div className='btn-card-field'>
                <button>Buy</button>
              </div>
            </div>
            <div className='card'>
            <img className='camping-spot-image' src={campingSpots}></img>
              <div className='card-text'>Lorem ipsum Lorem ipsum Lorem ipsum</div>
              <div className='card-length'>10x10 Meters</div>
              <div className='price-spot'>€50,- per day</div>
              <div className='btn-card-field'>
                <button>Buy</button>
              </div>
            </div>
            <div className='card'>
            <img className='camping-spot-image' src={campingSpots}></img>
              <div className='card-text'>Lorem ipsum Lorem ipsum Lorem ipsum</div>
              <div className='card-length'>10x10 Meters</div>
              <div className='price-spot'>€50,- per day</div>
              <div className='btn-card-field'>
                <button>Buy</button>
              </div>
            </div>
          </div>
          <div className='background-text'>
            <h2>Molerat Activities { user.email }</h2>
          </div>
          <div className='row'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage