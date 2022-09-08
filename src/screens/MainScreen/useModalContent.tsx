import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addCommand } from "../../redux/commandSlice";
import CustomInput from "../../component/CommonComponent/Input/CustomInput";
import "./modalStyle.scss";
import { ModalRefHandle } from "../../component/CommonComponent/Modal/Modal";

interface Prop {
  name: string;
  ref: React.RefObject<ModalRefHandle>;
}

export default function useModalContent({ name, ref }: Prop) {
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
            ref.current?.close();
            dispatch(
              addCommand({
                name: state,
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
