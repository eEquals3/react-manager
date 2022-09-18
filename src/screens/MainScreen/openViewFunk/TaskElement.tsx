import React, { memo, useCallback } from "react";
import { Task } from "../../../redux/taskSlice";

interface Props {
  taskId: string;
  task: Task;
  onTaskPress: (taskId: string) => void;
}

const TaskComponent: React.FC<Props> = ({ taskId, task, onTaskPress }) => {
  const onPress = useCallback(() => {
    onTaskPress(taskId);
  }, [taskId, onTaskPress]);

  return (
    <button className="ButtonTaskStyle" type="button" onClick={onPress}>
      {task?.name}
    </button>
  );
};

export const TaskElement = memo(TaskComponent);
