import React, { ReactElement } from 'react';
import './LoginButtons.css';

export function LoginContent(): ReactElement {
  return (
    <>

      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="Name"> Username </label>
      <input type="text" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <p>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="Psw"> Password </label>
        <input type="password" />
      </p>
    </>
  );
}

export function LoginAction(): ReactElement {
  return (
    <>
      <button type="button" className="loginButtons"> вход </button>
      <button type="button" className="loginButtons"> регистрация </button>
    </>
  );
}
