import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LOGIN_ROUTE, ERROR_ROUTE, REGISTER_ROUTE } from './constants/routes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route path={LOGIN_ROUTE} element={<LoginPage />} />
            <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
            <Route
              path={`${ERROR_ROUTE}/:errorCode?`}
              element={<ErrorPage />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
