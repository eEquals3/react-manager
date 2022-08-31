import React, { memo, ReactElement } from "react";
import "./OpenViewFunkStyles.scss";

const defaultContent = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const DefaultView = (): ReactElement => {
  return <div style={defaultContent}>здесь ничего нет</div>;
};

export default memo(DefaultView);
