import React, { useState, useCallback, useMemo, memo, useRef } from "react";
import "./LoginButtons.scss";
import Modal, {
  ModalRefHandle,
} from "../../component/CommonComponent/Modal/Modal";
import { useRenderRegisterModal } from "./RegisterModal";

const LoginModal = () => {
  const [stLogin, setStLogin] = useState<string>("");
  const [stPassword, setStPassword] = useState<string>("");
  const modalRef = useRef<ModalRefHandle>(null);

  const clickLoginButton = useCallback(() => {
    console.log(stLogin.length > 3 && stPassword.length > 3 ? "ok" : "nope");
  }, [stLogin, stPassword]);

  const { renderRegisterAction, renderRegisterContent } =
    useRenderRegisterModal();

  const RegisterModal = useMemo(
    () => (
      <Modal
        triggerButtonName={null}
        modalName="Зарегестрироваться"
        renderActions={renderRegisterAction}
        renderContent={renderRegisterContent}
        ref={modalRef}
      ></Modal>
    ),
    []
  );

  const LoginAction = useMemo(
    () => (
      <>
        {RegisterModal}
        <button
          type="button"
          className="loginButtons"
          onClick={clickLoginButton}
        >
          вход
        </button>
        <button
          type="button"
          className="loginButtons"
          onClick={() => modalRef.current?.open()}
        >
          регистрация
        </button>
      </>
    ),
    [clickLoginButton]
  );

  const LoginContent = useMemo(
    () => (
      <>
        <label
          htmlFor="Name"
          style={{
            textAlign: "center",
            display: "block",
            paddingBottom: "1vw",
          }}
        >
          {}
          <input
            type="text"
            onChange={(loginChange) => {
              setStLogin(loginChange.target.value);
            }}
            value={stLogin}
            placeholder="Username"
            style={{ borderRadius: "10px", textAlign: "center", height: "2vw" }}
          />
        </label>
        <label htmlFor="Psw" style={{ textAlign: "center", display: "block" }}>
          {}
          <input
            type="password"
            onChange={(passwordChange) => {
              setStPassword(passwordChange.target.value);
            }}
            value={stPassword}
            placeholder="Password"
            style={{
              borderRadius: "10px",
              textAlign: "center",
              height: "2vw",
            }}
          />
        </label>
      </>
    ),
    [stPassword, stLogin]
  );

  return (
    <Modal
      triggerButtonName="Авторизация"
      triggerButtonStyle="ButtonLoginStyle"
      modalName="Login"
      renderActions={LoginAction}
      renderContent={LoginContent}
    />
  );
};

export default memo(LoginModal);
