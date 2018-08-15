import React, {Fragment} from 'react';

export const Buffer = (props) => (
  <div className="row" style={{height: props.height || '100px'}}/>
);

export const Input = (props) => {
  let classes = ["form-group"];
  if (props.classes) {
    classes.push(...props.classes)
  }
  return (
    <div className={classes.join(' ')}>
      <label htmlFor={props.name} className={props.label_class}>{props.label}</label>
      <input
        onChange={props.onChange || null}
        required={props.required || 'true'}
        type={props.type || 'text'}
        className={props.input_class || "form-control"}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}/>
    </div>
  )
};

export const Inputs = (props) => {
  return (
    <Fragment>
      {props.inputs.map((options, index) => (
        <Input key={index}  {...options} />
      ))}
    </Fragment>
  )
};
