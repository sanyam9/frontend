import React from 'react';
import './RegisterPage.css';
import folderImage from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx@3x.png';

function RegisterPage() {
  return (
    <div className='register-wrapper'>
      <div className='left-container'>
        <h1>Design APIs fast,</h1>
        <h1>Manage content easily.</h1>
        <img src={folderImage} alt='folder-img' />
      </div>
      <div className='right-container'>
        <h1>Login to your CMS+ account</h1>
        <div className='login-box'>
          <div className='input-label'>
            <label>Email</label>
            <input type={'email'}></input>
          </div>
          <div className='input-label'>
            <label>Password</label>
            <input type={'password'}></input>
          </div>
          <div className='input-label'>
            <label>Confirm Password</label>
            <input type={'password'}></input>
          </div>
          <button className='register-btn'>Register</button>
          <p>
            <u>Already have an account? Login!</u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
