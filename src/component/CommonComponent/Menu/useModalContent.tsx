import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addCommand } from "../../../redax/commandSlice";

interface Prop {
  name: string;
}

export default function useModalContent({ name }: Prop) {
  const dispatch = useDispatch();
  const [state, setState] = useState<string>("");

  const buttonModalName = useCallback((nameToEdit: string) => {
    switch (nameToEdit) {
      case "Список команд":
        return "команда";
      case "Статистика":
        return "команда";
      case "Список задач":
        return "задача";
      default:
        return name.toLowerCase();
    }
  }, []);

  const renderText = useMemo(
    () => (
      <label htmlFor="Name" style={{ textAlign: "center", display: "block" }}>
        {}
        <input
          type="text"
          onChange={(loginChange) => {
            setState(loginChange.target.value);
          }}
          value={state}
          placeholder={buttonModalName(name)}
          style={{ borderRadius: "10px", textAlign: "center", height: "2vw" }}
        />
      </label>
    ),
    [name, state]
  );

  const renderCreateButton = useMemo(
    () => (
      <button
        type="button"
        className="ButtonStyle"
        onClick={() => {
          dispatch(
            addCommand({
              name: `${state}`,
              letterCount: name.length,
            })
          );
        }}
      >
        добавить
      </button>
    ),
    []
  );

  return {
    buttonModalName,
    renderCreateButton,
    renderText,
  } as const;
}
