import React, { useMemo, useState } from "react";
import "./LoginStyle.scss";

export const useRenderRegisterModal = () => {
  const [stLogin, setStLogin] = useState<string>("");
  const [stPassword, setStPassword] = useState<string>("");

  const renderRegisterContent = useMemo(
    () => (
      <div style={{ display: "flex", flexDirection: "column" }}>
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
            style={{
              borderRadius: "10px",
              textAlign: "center",
              height: "2vw",
            }}
          />
        </label>
        <label
          htmlFor="Psw"
          style={{
            textAlign: "center",
            display: "block",
            paddingBottom: "1vw",
          }}
        >
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
        <label htmlFor="Psw" style={{ textAlign: "center", display: "block" }}>
          {}
          <input
            type="password"
            onChange={(passwordChange) => {
              setStPassword(passwordChange.target.value);
            }}
            value={stPassword}
            placeholder="Repeat Password"
            style={{
              borderRadius: "10px",
              textAlign: "center",
              height: "2vw",
            }}
          />
        </label>
      </div>
    ),
    []
  );
  const renderRegisterAction = useMemo(
    () => (
      <button type="button" className="loginButtons">
        зарагестрироваться
      </button>
    ),
    []
  );

  return {
    renderRegisterAction,
    renderRegisterContent,
  } as const;
};
