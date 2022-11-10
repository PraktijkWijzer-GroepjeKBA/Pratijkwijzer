import React from 'react'
import './login.scss';
import background from '../../img/mole-logo-image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../signup/Signup';

const Login = ({ openLogin, onCloseLogin }) => {

  const [openSignupModal, setSignupOpenModal] = useState(false)
  // const [opentest, settest] = useState(false)

    
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!openLogin) return null;

  return (
    <div className='test'>
      <div className='login-form'>
        <FontAwesomeIcon onClick={onCloseLogin} className='closing-form' icon={faXmark}></FontAwesomeIcon>
      <div style={{ backgroundImage: `url(${background})` }} className='background-login-image'></div>
        <div className='center-input'>
          <h1>Login</h1>
          <label>Email</label>
          <input type='text' alt='#' placeholder='Email...' onChange={(e) => { setLoginEmail(e.target.value); }}></input>
          <label>Password</label>
          <input type='password' alt='#' placeholder='Password...' onChange={(e) => { setLoginPassword(e.target.value); }}></input>
          <button type="submit" onClick={login}>Submit</button>
          <div className='login-info'>
            <p onClick={() => {
              setSignupOpenModal(true)}}>Don't have an account yet?</p>
            <Signup openSignupModal={openSignupModal} onCloseSignup={() => setSignupOpenModal(false)} /> 
          </div>
          <div className='login-info'>
            <p>Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
