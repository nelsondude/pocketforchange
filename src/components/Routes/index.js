import React from 'react';
import {Redirect, Route} from "react-router-dom";


export const PrivateRoute = ({component: Component, loggedIn, ...rest}) => (
  <Route {...rest} render={(props) => (
    loggedIn
      ? <Component {...props} />
      : <Redirect to='/login'/>
  )}/>
);


export const PublicRoute = ({component: Component, loggedIn, ...rest}) => (
  <Route {...rest} render={(props) => (
    loggedIn
      ? <Redirect to="/dashboard/"/>
      : <Component {...props}/>
  )} />
);
