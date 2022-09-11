import React, { memo, ReactElement, useCallback } from "react";
import "./OpenViewFunkStyles.scss";
import { useSelector } from "react-redux";
import { TaskSelector } from "../../../redux/selectors";
import { Task } from "../../../redux/taskSlice";

const TaskView = (): ReactElement => {
  const tasks = useSelector(TaskSelector);
  const renderButton = useCallback((t: Task) => {
    return (
      <button className="ButtonStyle" type="button">
        {t.name}
      </button>
    );
  }, []);
  return <div className="DefaultView">{tasks.map(renderButton)}</div>;
};

export default memo(TaskView);
