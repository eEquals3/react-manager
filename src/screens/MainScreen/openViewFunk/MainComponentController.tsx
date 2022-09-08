import React, { memo, ReactElement } from "react";
import "./OpenViewFunkStyles.scss";
import CommandView from "./CommandView";
import DefaultView from "./DefaultView";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Prop {
  commandName: string;
}

const FillerController = ({ commandName }: Prop): ReactElement => {
  console.log(commandName);
  const type = useSelector((state: RootState) => state.utils.windowType);
  switch (type) {
    case "command":
      return <CommandView name={commandName} />;
    case "statistic":
      return <DefaultView text="Здесь нет статистики" />;
    case "task":
      return <DefaultView text="Здесь нет задач" />;
    default:
      return <DefaultView />;
  }
};

export default memo(FillerController);
