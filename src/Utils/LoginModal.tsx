import React, {
  useState, memo, useCallback, useMemo,
} from 'react';
import './LoginButtons.css';
import Modal from '../component/CommonComponent/Modal/Modal';

export function LoginModal() {
  const [stLogin, setStLogin] = useState<string>('');
  const [stPassword, setStPassword] = useState<string>('');

  const clickLoginButton = useCallback(() => {
    console.log((stLogin.length > 3) && (stPassword.length > 3) ? 'ok' : 'nope');
  }, [stLogin, stPassword]);

  const LoginAction = useMemo(() => (
    <>
      <button type="button" className="loginButtons" onClick={clickLoginButton}> вход</button>
      <button type="button" className="loginButtons"> регистрация</button>
    </>
  ), [clickLoginButton]);

  const LoginContent = useMemo(() => (
    <>
      <label htmlFor="Name">
        Username
        <input
          type="text"
          onChange={(loginChange) => { setStLogin(loginChange.target.value); }}
          value={stLogin}
        />
      </label>
      <p>
        <label htmlFor="Psw">
          Password
          <input
            type="password"
            onChange={(passwordChange) => { setStPassword(passwordChange.target.value); }}
            value={stPassword}
          />
        </label>
      </p>
    </>
  ), [stPassword, stLogin]);

  return (
    <Modal
      triggerButtonName="Login"
      triggerButtonStyle="ButtonLoginStyle"
      modalName="Login"
      renderActions={LoginAction}
      renderContent={LoginContent}
    />
  );
}

export default memo(LoginModal);
