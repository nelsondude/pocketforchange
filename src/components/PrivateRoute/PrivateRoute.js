import React from 'react';
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: Component, loggedIn, ...rest}) => {
  return (
    <Route {...rest} render={(props) => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to='/login'/>
    )}/>
  )
};

export default PrivateRoute;
