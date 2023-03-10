import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  LOGIN_ROUTE,
  ERROR_ROUTE,
  REGISTER_ROUTE,
  CONTENT_ROUTE,
  COLLECTION_ROUTE,
} from './constants/routes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import ContentPage from './pages/ContentPage';
import NotFoundPage from './pages/NotFoundPage';
import CollectionPage from './pages/CollectionPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <BrowserRouter>
          <Routes>
            <Route
              path={LOGIN_ROUTE}
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path={REGISTER_ROUTE}
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path={CONTENT_ROUTE}
              element={
                <ProtectedRoute>
                  <ContentPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${COLLECTION_ROUTE}/:collectionName`}
              element={
                <ProtectedRoute>
                  <CollectionPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${ERROR_ROUTE}/:errorCode?`}
              element={<ErrorPage />}
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
