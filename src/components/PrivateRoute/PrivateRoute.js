import React from 'react';

export const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={(props) => (
      localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect to='/login'/>
    )}/>
  )
};