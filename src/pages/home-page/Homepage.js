import React from 'react'
import './homepage.scss';
import background from '../../img/home-page-image.png';
import backgroundExperience from '../../img/test.png';
import Headerhomepage from '../../components/header-home-page/Headerhomepage';
import Footer from '../../components/footer/Footer';

import kaart from '../../img/kaart.png';
import campingSpots from '../../img/camping-spots.png';
import playground from '../../img/playground-image.png';
import pool from '../../img/pool-image.png';
import restuarant from '../../img/restaurant-image.png';
import mountain from '../../img/mountain-image.png';



const Homepage = ({ user }) => {
  return (
    <div className='#'>
      <div className='container-header'>
          <Headerhomepage user={user}/>
      </div>
        <div className='background-image' style={{ backgroundImage: `url(${background})` }} alt='#'></div>
        <div className='image-container'>
            <img className='image' src={kaart} alt='#'></img>
        </div>
      <div className='bg-container' style={{ backgroundImage: `url(${backgroundExperience})`}} alt='#'>
        <div className='row-box'>
          <div className='background-text'>
            <h2>Explore Camps</h2>
          </div>
          <div className='row'>
            <div className='card'>
              <img className='camping-spot-image' src={campingSpots} alt='#'></img>
              <div className='card-text'>Lorem ipsum Lorem ipsum Lorem ipsum</div>
              <div className='card-length'>10x10 Meters</div>
              <div className='price-spot'>€50,- per day</div>
              <div className='btn-card-field'>
                <button>Buy</button>
              </div>
            </div>
            <div className='card'>
            <img className='camping-spot-image' src={campingSpots} alt='#'></img>
              <div className='card-text'>Lorem ipsum Lorem ipsum Lorem ipsum</div>
              <div className='card-length'>10x10 Meters</div>
              <div className='price-spot'>€50,- per day</div>
              <div className='btn-card-field'>
                <button>Buy</button>
              </div>
            </div>
            <div className='card'>
            <img className='camping-spot-image' src={campingSpots} alt='#'></img>
              <div className='card-text'>Lorem ipsum Lorem ipsum Lorem ipsum</div>
              <div className='card-length'>10x10 Meters</div>
              <div className='price-spot'>€50,- per day</div>
              <div className='btn-card-field'>
                <button>Buy</button>
              </div>
            </div>
          </div>
          <div className='background-text'>
            <h2>Molerat Activities</h2>
          </div>
          <div className='row'>
            <div className='card'>
              <div className='center-box'>
                <h3>Playtown Molerat</h3>
                <img className='activity-image' src={playground} alt='#'></img>
                <p className='activity-text'>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                <button>More</button>
              </div>
            </div>
            <div className='card'>
            <div className='center-box'>
                <h3>Restuarant Molerat</h3>
                <img className='activity-image' src={restuarant} alt='#'></img>
                <p className='activity-text'>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                <button>More</button>
              </div>
            </div>       
            <div className='card'>
            <div className='center-box'>
                <h3>Mountain molerat</h3>
                <img className='activity-image' src={mountain} alt='#'></img>
                <p className='activity-text'>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                <button>More</button>
              </div>
            </div>
            <div className='card'>
            <div className='center-box'>
                <h3>Pool Molerat</h3>
                <img className='activity-image' src={pool} alt='#'></img>
                <p className='activity-text'>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                <button>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage