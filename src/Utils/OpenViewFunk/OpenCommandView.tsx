import React, { ReactElement } from "react";
import "./OpenViewFunkStyles.css";

interface Prop {
  name: string;
}

export default function CommandView({ name }: Prop): ReactElement {
  return <div className="viewHeader">{name}</div>;
}
