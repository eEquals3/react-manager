import React, { memo, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { reduceCommand, setCurrentCommand } from "../../../redax/commandSlice";
import styled from "styled-components";

interface Prop {
  name: string;
}

const Button = styled.button`
  border-radius: 10px;
  position: absolute;
  top: 15%;
  bottom: 15%;
  right: 1%;
  font-size: 2.5vh;
`;

const CommandView = ({ name }: Prop): ReactElement => {
  const dispatch = useDispatch();

  return (
    <div className="viewHeader">
      {name}
      <Button
        type="button"
        onClick={() => {
          dispatch(reduceCommand(name));
          dispatch(setCurrentCommand(""));
        }}
      >
        удалить команду
      </Button>
    </div>
  );
};

export default memo(CommandView);
