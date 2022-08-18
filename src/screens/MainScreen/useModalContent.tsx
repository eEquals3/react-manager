import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addCommand } from "../../redax/commandSlice";
import CustomInput from "../../component/CommonComponent/Input/CustomInput";
import "./modalStyle.scss";

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
      <div id="modalContent">
        <CustomInput
          onChangeInput={(loginChange) => {
            setState(loginChange.target.value);
          }}
          value={state}
          type="text"
          placeHolder={buttonModalName(name)}
        />
      </div>
    ),
    [name, state]
  );

  const renderCreateButton = useMemo(
    () => (
      <div id="modalAction">
        <button
          type="button"
          className="ButtonStyle"
          onClick={() => {
            console.log(state);
            dispatch(
              addCommand({
                name: state,
                letterCount: name.length,
              })
            );
          }}
        >
          добавить
        </button>
      </div>
    ),
    [state]
  );

  return {
    buttonModalName,
    renderCreateButton,
    renderText,
  } as const;
}
