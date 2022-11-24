import React from 'react'

import './signup.scss';
import background from '../../img/mole-logo-image.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

const Signup = ({ openSignupModal, onCloseSignup }) => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const userData = {
        uid: user.user.uid,
        firstname: registerFirstName,
        lastname: registerLastName,
      };

      await setDoc(doc(db, "users", user.user.uid), userData);
      navigate("/");
      
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!openSignupModal) return null;

  return (
    <div className='blur-background'>
      <div className='signup-form'>
        <FontAwesomeIcon className='closing-form' onClick={onCloseSignup} icon={faXmark}></FontAwesomeIcon>
      <div style={{ backgroundImage: `url(${background})` }} className='background-login-image'></div>
        <div className='center-input'>
          <h1>Make an account</h1>
        <div className='input-field'>
          <label>Email</label>
          <input type='text' alt='#' placeholder='Email...' onChange={(e) => { setRegisterEmail(e.target.value); }}></input>
        </div>
        <div className='input-field'>
          <label>Password</label>
          <input type='password' alt='#' placeholder='Password...' onChange={(e) => { setRegisterPassword(e.target.value); }}></input>
        </div>
        <div className='input-field'>
          <label>Repeat password</label>
          <input type='password' alt='#' placeholder='Repeat Password...'></input>
        </div>
          <div className='input-container'>
            <div className='field'>
            <label>First name</label>
            <input type='text' alt='#' placeholder='First name...' onChange={(e) => { setRegisterFirstName(e.target.value); }}></input>
            </div>
            <div className='field'>
            <label>Last name</label>
            <input type='text' alt='#' placeholder='Last name...' onChange={(e) => { setRegisterLastName(e.target.value); }}></input>
            </div>
          </div>
          <button type='submit' onClick={register}>Register</button>
        </div>
      </div>
      </div>
  )
}

export default Signup
