import React from 'react'
import './login.scss';
import background from '../../img/mole-logo-image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("gelukt");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='blur-background'>
      <div className='login-form'>
        <Link to='Frontpage'><FontAwesomeIcon className='closing-form' icon={faXmark}></FontAwesomeIcon></Link>
      <div style={{ backgroundImage: `url(${background})` }} className='background-login-image'></div>
        <div className='center-input'>
          <h1>Login</h1>
          <label>Email</label>
          <input type='text' alt='#' placeholder='Email...' onChange={(e) => { setLoginEmail(e.target.value); }}></input>
          <label>Password</label>
          <input type='password' alt='#' placeholder='Password...' onChange={(e) => { setLoginPassword(e.target.value); }}></input>
          <button type="submit" onClick={login} >Submit</button>
          <div className='login-info'>
            <Link to='../Signup'><p>Don't have an account yet?</p></Link>
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
