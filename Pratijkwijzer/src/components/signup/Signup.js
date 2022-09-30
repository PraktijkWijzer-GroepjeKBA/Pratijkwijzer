import React from 'react'

import './signup.scss';
import background from './mole-logo-image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
  return (
    <div className='blur-background'>
      <form className='signup-form'>
        <FontAwesomeIcon className='closing-form' icon={faXmark}></FontAwesomeIcon>
      <div style={{ backgroundImage: `url(${background})` }} className='background-login-image'></div>
        <div className='center-input'>
          <h1>Make an account</h1>
        <div className='input-field'>
          <label>Email</label>
          <input></input>
        </div>
        <div className='input-field'>
          <label>Password</label>
          <input></input>
        </div>
        <div className='input-field'>
          <label>Repeat password</label>
          <input></input>
        </div>
          <div className='input-container'>
            <div className='field'>
            <label>First name</label>
            <input></input>
            </div>
            <div className='field'>
            <label>Last name</label>
            <input></input>
            </div>
          </div>
          <button>Register</button>
        </div>
      </form>
      </div>
  )
}

export default Signup
