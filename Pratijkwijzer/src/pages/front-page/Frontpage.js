import React from 'react';
import './frontpage.scss';
import background from '../../img/front-page-image.png';


const Frontpage = ({ user }) => {
  return (
    <div>
    <div style={{ backgroundImage: `url(${background})` }} className='background-image'></div>
    <div className='background-image-text'>
    <div className='text-1'>a life time experience</div>
    <div className='text-2'>CampingMolerat<br></br><span>Where molerats can be friends</span></div>
    <div className='text-btn-field'>
    <button>Explore camps</button>
    {user?.email}
    </div>
    </div>
    </div>
  )
}

export default Frontpage
