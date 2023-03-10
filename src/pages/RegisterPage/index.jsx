import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import folderImage from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx@3x.png';
import { LOGIN_ROUTE } from '../../constants/routes';
import makeRequest from '../../utils/makeRequest';
import { REGISTER } from '../../constants/apiEndPoints';

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const registerHandler = async () => {
    const request = {
      data: {
        email,
        password,
        confirmPassword,
      },
    };
    const data = await makeRequest(REGISTER, request, navigate);
    if (data) {
      navigate(LOGIN_ROUTE);
    }
  };

  return (
    <div className='register-wrapper'>
      <div className='left-container'>
        <h1>Design APIs fast,</h1>
        <h1>Manage content easily.</h1>
        <img src={folderImage} alt='folder-img' />
      </div>
      <div className='right-container'>
        <h1>Register to CMS+</h1>
        <div className='login-box'>
          <div className='input-label'>
            <label>Email</label>
            <input
              type={'email'}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className='input-label'>
            <label>Password</label>
            <input
              type={'password'}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div className='input-label'>
            <label>Confirm Password</label>
            <input
              type={'password'}
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></input>
          </div>
          <button onClick={registerHandler} className='register-btn'>
            Register
          </button>
          {confirmPassword !== '' && confirmPassword !== password && (
            <p className='password-match'>Passwords does not match</p>
          )}
          <p onClick={() => navigate(LOGIN_ROUTE)}>
            <u>Already have an account? Login!</u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
