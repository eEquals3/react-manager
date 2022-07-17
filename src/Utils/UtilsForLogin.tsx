import React, { ReactElement } from 'react';
import './LoginButtons.css';

export function LoginContent(): ReactElement {
  return (
    <>
      <text> ololo </text>
      <text> ololo </text>
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
