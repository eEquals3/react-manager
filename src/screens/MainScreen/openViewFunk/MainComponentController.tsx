import React, { memo, ReactElement } from "react";
import "./OpenViewFunkStyles.scss";
import CommandView from "./CommandView";
import DefaultView from "./DefaultView";

interface Prop {
  commandName: string;
}

const FillerController = ({ commandName }: Prop): ReactElement => {
  console.log(commandName);
  return commandName.length > 0 ? (
    <CommandView name={commandName} />
  ) : (
    <DefaultView />
  );
};

export default memo(FillerController);
