import React, { memo, ReactElement } from "react";
import "./OpenViewFunkStyles.scss";
import CommandView from "./CommandView";
import DefaultView from "./DefaultView";
import TaskView from "./TasksView";
import { useSelector } from "react-redux";
import { getWindowType } from "../../../redux/selectors";

interface Prop {
  commandName: string;
}

const FillerController = ({ commandName }: Prop): ReactElement => {
  console.log(commandName);
  const type = useSelector(getWindowType);
  switch (type) {
    case "command":
      return <CommandView name={commandName} />;
    case "statistic":
      return <DefaultView text="Здесь нет статистики" />;
    case "task":
      return <TaskView />;
    default:
      return <DefaultView />;
  }
};

export default memo(FillerController);
