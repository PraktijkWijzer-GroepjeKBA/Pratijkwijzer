import React from 'react'
import './headerhomepage.scss';

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

const Headerhomepage = ({ user }) => {

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header>
        <div className='header-left-side'>
            <Link to='/'><h1>CampingMolerat</h1></Link>
        </div>
        <div className='header-right-side'>
            <button>Booking</button>
            <Link to="/Support"><button>Support</button></Link>
            {user ? <button className="logoutBtn" onClick={() => logout()}>Logout</button> : <Link to='../Login'><button className='login-btn'>Login</button></Link>}           
        </div>
    </header>
  )
}

export default Headerhomepage