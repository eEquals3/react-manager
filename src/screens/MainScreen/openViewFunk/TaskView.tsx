import React, { memo, ReactElement, useCallback } from "react";
import "./OpenViewFunkStyles.scss";
import { useSelector } from "react-redux";
import { TaskSelector } from "../../../redux/selectors";
import { Task } from "../../../redux/taskSlice";

const TaskView = (): ReactElement => {
  const tasks = useSelector(TaskSelector);
  const renderButton = useCallback((t: Task) => {
    return (
      <button className="ButtonTaskStyle" type="button">
        {t.name}
      </button>
    );
  }, []);
  return (
    <>
      <div id="viewHeader" className="box-shadow">
        Задачи
      </div>
      <div className="TaskCenterContent">
        <div>
          <header> Список задач </header>
          <div>{tasks.map(renderButton)}</div>
        </div>
      </div>
    </>
  );
};

export default memo(TaskView);
