import React, { ReactElement } from "react";
import "./OpenViewFunkStyles.scss";

interface Prop {
  name: string;
}

export const CommandView = ({ name }: Prop): ReactElement => {
  return <div className="viewHeader"> {name} </div>;
};
