import React, { useCallback, useMemo, useState } from "react";
import "./LoginStyle.scss";
import CustomInput from "../../component/CommonComponent/Input/CustomInput";
import "../../component/CommonComponent/Button/Buttons.scss";

export const useRenderRegisterModal = () => {
  const [stLogin, setStLogin] = useState<string>("");
  const [stPassword, setStPassword] = useState<string>("");
  const [stPasswordRepeat, setStPasswordRepeat] = useState<string>("");

  const CheckPassword = useCallback(() => {
    if (
      stPasswordRepeat === stPassword &&
      stPasswordRepeat.length > 3 &&
      stLogin.length > 3
    )
      console.log("ok");
  }, []);

  const renderRegisterContent = useMemo(
    () => (
      <div className="content">
        <CustomInput
          type="text"
          value={stLogin}
          onChangeInput={(e) => {
            setStLogin(e.target.value);
          }}
          placeHolder="Логин"
        />
        <div className="separator" />
        <CustomInput
          type="Password"
          value={stLogin}
          onChangeInput={(e) => {
            setStPassword(e.target.value);
          }}
          placeHolder="Пароль"
        />
        <div className="separator" />
        <CustomInput
          type="Password"
          value={stLogin}
          onChangeInput={(e) => {
            setStPasswordRepeat(e.target.value);
          }}
          placeHolder="Повторите пароль"
        />
        <div className="separator" />
      </div>
    ),
    []
  );
  const renderRegisterAction = useMemo(
    () => (
      <div className="actions">
        <button type="button" className="ButtonStyle" onClick={CheckPassword}>
          зарагестрироваться
        </button>
      </div>
    ),
    []
  );

  return {
    renderRegisterAction,
    renderRegisterContent,
  } as const;
};
