import React from 'react';
import { Navigate } from 'react-router-dom';

import propTypes from 'prop-types';

const ProtectedRoute = (props) => {
  if (localStorage.getItem('token')) {
    return props.children;
  } else {
    return <Navigate to='/' />;
  }
};

ProtectedRoute.propTypes = {
  children: propTypes.node,
};

export default ProtectedRoute;
