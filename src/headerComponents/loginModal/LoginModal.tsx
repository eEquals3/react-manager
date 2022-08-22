import React, {
  useState,
  useCallback,
  useMemo,
  memo,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import "./LoginStyle.scss";
import Modal, {
  ModalRefHandle,
} from "../../component/CommonComponent/Modal/Modal";
import CustomInput from "../../component/CommonComponent/Input/CustomInput";
import "../../component/CommonComponent/Button/Buttons.scss";

interface Props {
  onRegisterPressed: () => void;
  onLoginPressed: (login: string, pass: string) => void;
}

export interface LoginModalRefType {
  hide: () => void;
  show: () => void;
}

const LoginModal: React.ForwardRefRenderFunction<LoginModalRefType, Props> = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { onLoginPressed, onRegisterPressed }: Props,
  ref
) => {
  const modalRef = useRef<ModalRefHandle>(null);
  const [stLogin, setStLogin] = useState<string>("");
  const [stPassword, setStPassword] = useState<string>("");

  useImperativeHandle(ref, () => ({
    show() {
      modalRef.current?.open();
    },
    hide() {
      modalRef.current?.close();
    },
  }));

  const clickLoginButton = useCallback(() => {
    console.log(stLogin.length > 3 && stPassword.length > 3 ? "ok" : "nope");
  }, [stLogin, stPassword]);

  const onChangeLogin = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStLogin(e.target.value);
    },
    []
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStPassword(e.target.value);
    },
    []
  );

  const LoginAction = useMemo(
    () => (
      <div className="actions">
        <button
          type="button"
          className="ButtonStyle"
          onClick={clickLoginButton}
        >
          Войти
        </button>
        <text>
          Нет аккаунта?
          <view></view>
          <text onClick={onRegisterPressed}>Зарегестрироваться</text>
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
          onChangeInput={onChangeLogin}
        />
        <div className="separator" />
        <CustomInput
          type="Password"
          onChangeInput={onChangePassword}
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
      triggerButtonStyle="ButtonStyle"
      modalName="Login"
      renderActions={LoginAction}
      renderContent={LoginContent}
      ref={modalRef}
    />
  );
};

export default memo(forwardRef(LoginModal));
