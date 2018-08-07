import React from 'react';
import PlaidLink from 'react-plaid-link'
import './BankConnect.css';

export default (props) => (
    <PlaidLink
      clientName={'Pocket For Change'}
      env={process.env.REACT_APP_PLAID_ENV}
      publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
      product={["auth", "transactions"]}
      onExit={props.onExit}
      onSuccess={props.onSuccess}
      className="BankConnect"
    >{props.message}</PlaidLink>
);
