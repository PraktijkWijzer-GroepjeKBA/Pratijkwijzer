import React from 'react'
import './login.scss';
import background from './mole-logo-image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className='blur-background'>
      <form className='login-form'>
        <FontAwesomeIcon className='closing-form' icon={faXmark}></FontAwesomeIcon>
      <div style={{ backgroundImage: `url(${background})` }} className='background-login-image'></div>
        <div className='center-input'>
        <h1>Login</h1>
          <label>Email</label>
        <input alt='#'></input>
        <label>Password</label>
        <input alt='#'></input>
        <button>Submit</button>
        <div className='login-info'>
        <Link to='../Signup'><p>Don't have an account yet?</p></Link>
        </div>
        <div className='login-info'>
        <p>Forgot password?</p>
        </div>
        </div>
      </form>
      </div>
  )
}

export default Login