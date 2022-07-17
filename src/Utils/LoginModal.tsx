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
  // @ts-ignore
  const LoginContent = useMemo(() => (
    <>
      <label htmlFor="Name" style={{ textAlign: 'center', display: 'block' }}>
        {/* Username */}
        <input
          type="text"
          onChange={(loginChange) => { setStLogin(loginChange.target.value); }}
          value={stLogin}
          placeholder="Username"
          style={{ borderRadius: '10px', textAlign: 'center' }}
        />
      </label>
      <p>
        <label htmlFor="Psw" style={{ textAlign: 'center', display: 'block' }}>
          {/* Password */}
          <input
            type="password"
            onChange={(passwordChange) => { setStPassword(passwordChange.target.value); }}
            value={stPassword}
            placeholder="Password"
            style={{ borderRadius: '10px', textAlign: 'center' }}
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
