import React, { memo, ReactElement } from "react";
import "./OpenViewFunkStyles.scss";

const defaultContent = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

interface Prop {
  text?: string;
}

const DefaultView = ({ text = "Здесь ничего нет" }: Prop): ReactElement => {
  return <div style={defaultContent}>{text}</div>;
};

export default memo(DefaultView);
