import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '0 400px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
      }}
    >
      <h1 className="sign-in-logo">la<strong>biblioteca</strong></h1>
      <h5>Unlock the door to countless worlds then fall through</h5>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Enter In
      </Button>
    </div>
  );
}

export default Signin;
