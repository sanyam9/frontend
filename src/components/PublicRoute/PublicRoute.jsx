import React from 'react';
import { Navigate } from 'react-router-dom';
import proTypes from 'prop-types';

const PublicRoute = (props) => {
  if (localStorage.getItem('token')) {
    return <Navigate to='/' />;
  } else {
    return props.children;
  }
};

PublicRoute.propTypes = {
  children: proTypes.node.isRequired,
};

export default PublicRoute;
