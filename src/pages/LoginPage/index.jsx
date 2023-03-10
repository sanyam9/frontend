import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import folderImage from '../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx@3x.png';
import { REGISTER_ROUTE, CONTENT_ROUTE } from '../../constants/routes';
import makeRequest from '../../utils/makeRequest';
import { LOGIN } from '../../constants/apiEndPoints';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginHandler = async () => {
    const request = {
      data: {
        email,
        password,
      },
    };
    const { data: token } = await makeRequest(LOGIN, request, navigate);
    if (token) {
      localStorage.setItem('token', token);
      navigate(CONTENT_ROUTE);
    }
  };

  return (
    <div className='login-wrapper'>
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
          <button className='login-btn' onClick={loginHandler}>
            Login
          </button>
          <p onClick={() => navigate(REGISTER_ROUTE)}>
            <u>SignUp Now!</u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
