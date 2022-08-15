import React, { useState, useCallback, useMemo, memo, useRef } from "react";
import "./LoginStyle.scss";
import Modal, {
  ModalRefHandle,
} from "../../component/CommonComponent/Modal/Modal";
import { useRenderRegisterModal } from "./RegisterModal";
import CustomInput from "../../component/CommonComponent/Input/CustomInput";

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
      />
    ),
    []
  );

  const LoginAction = useMemo(
    () => (
      <div className="actions">
        {RegisterModal}
        <button
          type="button"
          className="loginButtons"
          onClick={clickLoginButton}
        >
          Войти
        </button>
        <text>
          Нет аккаунта?
          <view></view>
          <text onClick={() => modalRef.current?.open()}>
            Зарегестрироваться
          </text>
        </text>
      </div>
    ),
    [clickLoginButton]
  );

  const LoginContent = useMemo(
    () => (
      <div className="content">
        <CustomInput
          type="Text"
          placeHolder="Логин"
          value={stLogin}
          onChangeInput={(e) => {
            setStLogin(e.target.value);
          }}
        />
        <div className="separator" />
        <CustomInput
          type="Password"
          onChangeInput={(e) => {
            setStPassword(e.target.value);
          }}
          value={stPassword}
          placeHolder="Пароль"
        />
        <div className="separator" />
      </div>
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
