import React from 'react';
// import Button from '@material-ui/core/Button';
import { Button, ButtonToolbar } from 'react-bootstrap';

// const button = (props) => (
//   <Button size="large">
//     {props.children}
//   </Button>
// );


const bootstrapButton = (props) => (
  <Button bsStyle="success" onClick={props.clicked}>
    {props.children}
  </Button>
);

export default bootstrapButton;