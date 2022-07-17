import React, { ReactElement } from 'react';
import './LoginButtons.css';

export function LoginContent(): ReactElement {
  return (
    <>
      <label htmlFor="Name">
        Username
        <input type="text" />
      </label>

      <p>
        <label htmlFor="Psw">
          Password
          <input type="password" />
        </label>

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
