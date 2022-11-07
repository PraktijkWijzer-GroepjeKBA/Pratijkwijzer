import React, {useState} from 'react'
import './headerfrontpage.scss';
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Login from '../login/Login';

const Headerfrontpage = ({ user}) => {


  const [openLoginModal, setLoginOpenModal] = useState(false)

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className='header-front-page'>
        <div className='header-title'>CampingMolerat</div>
        <div className='header-button'>
            <Link to='Homepage'><button className='home-btn'>Home</button></Link>
            <Link to='Aboutpage'><button className='about-btn'>About</button></Link>
            <Link to='Support'><button className='support-btn'>Support</button></Link>
          {user ?<button className="logoutBtn" onClick={() => logout()}>Logout</button> : <button className='login-btn' onClick={() => setLoginOpenModal(true)}>Login</button>}  
          <Login openLogin={openLoginModal} onCloseLogin={() => setLoginOpenModal(false)} /> 
        </div>
    </div>
  )
}

export default Headerfrontpage;
