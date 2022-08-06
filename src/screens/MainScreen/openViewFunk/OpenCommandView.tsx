import React, { memo, ReactElement } from "react";
import "./OpenViewFunkStyles.scss";
import { useDispatch } from "react-redux";
import {
  currentCommandSelect,
  reduceCommand,
} from "../../../redax/commandSlice";

const CommandView = (): ReactElement => {
  const dispatch = useDispatch();
  const name = currentCommandSelect;

  return (
    <div className="viewHeader">
      {name.toString()}
      <button
        type="button"
        onClick={() => {
          dispatch(reduceCommand(name.toString()));
        }}
      >
        удалить команду
      </button>
    </div>
  );
};

export default memo(CommandView);
