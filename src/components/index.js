import React from 'react';

export const Buffer = (props) => (
  <div className="row" style={{height: props.height || '100px'}}/>
);

export const Input = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      required={props.required || 'true'}
      type={props.type || 'text'}
      className="form-control"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}/>
  </div>
);
