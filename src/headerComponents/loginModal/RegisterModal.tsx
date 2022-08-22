import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import "./LoginStyle.scss";
import CustomInput from "../../component/CommonComponent/Input/CustomInput";
import "../../component/CommonComponent/Button/Buttons.scss";
import Modal, {
  ModalRefHandle,
} from "../../component/CommonComponent/Modal/Modal";

export interface RegisterModalRefType {
  hide: () => void;
  show: () => void;
}

interface Props {
  onRegisterPressed: (login: string, pass: string) => void;
}

const RegisterModal: React.ForwardRefRenderFunction<
  RegisterModalRefType,
  Props
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
> = ({ onRegisterPressed }: Props, ref) => {
  const [stLogin, setStLogin] = useState<string>("");
  const [stPassword, setStPassword] = useState<string>("");
  const [stPasswordRepeat, setStPasswordRepeat] = useState<string>("");
  const modalRef = useRef<ModalRefHandle>(null);

  useImperativeHandle(ref, () => ({
    show() {
      modalRef.current?.open();
    },
    hide() {
      modalRef.current?.close();
    },
  }));

  useEffect(() => {
    console.log("stLogin", stLogin);
  }, [stLogin]);

  const WarningModal = useMemo(
    () => (
      <Modal
        ref={modalRef}
        modalName="Внимание"
        renderContent={
          <div>Логин и пароль должен содержать не менее 4 символов</div>
        }
        triggerButtonName={null}
      />
    ),
    [modalRef]
  );

  const CheckPassword = useCallback(() => {
    if (
      stPasswordRepeat === stPassword &&
      stPasswordRepeat.length > 3 &&
      stLogin.length > 3
    )
      console.log("ok");
    else modalRef.current?.open();
  }, [stPassword, stPasswordRepeat, stLogin]);

  const onLoginChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("e", e.target.value);
      setStLogin(e.target.value);
    },
    []
  );
  const onPasswordChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStPassword(e.target.value);
    },
    []
  );
  const onPasswordRepeatChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStPasswordRepeat(e.target.value);
    },
    []
  );

  const renderRegisterContent = useMemo(
    () => (
      <div className="content">
        <CustomInput
          type="text"
          value={stLogin}
          onChangeInput={onLoginChangeInput}
          placeHolder="Логин"
        />
        <div className="separator" />
        <CustomInput
          type="Password"
          value={stPassword}
          onChangeInput={onPasswordChangeInput}
          placeHolder="Пароль"
        />
        <div className="separator" />
        <CustomInput
          type="Password"
          value={stPasswordRepeat}
          onChangeInput={onPasswordRepeatChangeInput}
          placeHolder="Повторите пароль"
        />
        <div className="separator" />
      </div>
    ),
    [
      stLogin,
      stPassword,
      stPasswordRepeat,
      onPasswordRepeatChangeInput,
      onPasswordChangeInput,
      onLoginChangeInput,
    ]
  );

  const renderRegisterAction = useMemo(
    () => (
      <div className="actions">
        {WarningModal}
        <button type="button" className="ButtonStyle" onClick={CheckPassword}>
          зарагестрироваться
        </button>
        <div className="separator" />
      </div>
    ),
    [CheckPassword]
  );

  return (
    <Modal
      triggerButtonName={null}
      modalName="Зарегестрироваться"
      renderActions={renderRegisterAction}
      renderContent={renderRegisterContent}
      ref={modalRef}
    />
  );
};

export default memo(forwardRef(RegisterModal));
